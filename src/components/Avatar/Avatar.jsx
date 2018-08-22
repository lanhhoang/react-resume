import React, { PureComponent } from 'react';
import classNames from 'classnames';
import md5 from 'crypto-js/md5';
import queryString from 'query-string';
import styles from './Avatar.scss';

const getNameAbbr = name => {
  if (!name) {
    return '';
  }

  const words = name.split(' ');

  if (words.length === 1) {
    const [word] = words;

    if (word.length > 2) {
      return word.charAt(0).toUpperCase();
    }

    return word;
  }

  return words
    .map(word => word.charAt(0))
    .join('')
    .substr(0, 2);
};

const getGravatar = (email, { size, defaultAvatar } = {}) => {
  const root = '//www.gravatar.com/avatar/';
  const hash = md5(email);
  const query = queryString.stringify({
    size,
    d: defaultAvatar
  });

  return `${root}${hash}?${query}`;
};

class Avatar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imageUrlLoaded: false
    };
  }

  handleImageLoaded = event => {
    const { url } = this.props;
    this.setState({ imageUrlLoaded: !!url });
    event.target.setAttribute('loaded', '');
  };

  handleImageError = event => {
    event.target.setAttribute('error', '');
  };

  render() {
    const { url, email, name, size, className } = this.props;

    const { imageUrlLoaded } = this.state;

    const customSize = parseInt(size);

    const avatarUrl =
      url ||
      getGravatar(email, {
        size: customSize,
        defaultAvatar: name || email ? 'blank' : 'mm'
      });

    const avatarClass = classNames(
      styles.Avatar,
      {
        [styles.CustomAvatarLoaded]: imageUrlLoaded
      },
      className
    )

    return (
      <figure className={avatarClass}>
        <figcaption className={styles.Name}>
          {getNameAbbr(name) || getNameAbbr(email)}
        </figcaption>
        <img
          className={styles.AvatarImage}
          src={avatarUrl}
          alt={name}
          onLoad={this.handleImageLoaded}
          onError={this.handleImageError}
        />
      </figure>
    );
  }
}

export default Avatar;
