const DATA = {
  name: 'Lanh Hoang',
  profession: 'Software Engineer',
  address: 'Ho Chi Minh City, Vietnam',
  socials: [
    { name: 'github', url: 'https://github.com/lanhhoang' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/lanhhoang' }
  ],
  educations: [
    {
      university: 'Ho Chi Minh University of Technology',
      degree: 'Bachelor of Engineering (B.E.)',
      fieldOfStudy: 'Electrical, Electronics and Communications Engineering',
      startTime: '2010',
      endTime: '2015',
      description: ''
    }
  ],
  experiences: [
    {
      company: 'Renesas Design Vietnam Co., Ltd.',
      jobTitle: 'Hardware Engineer',
      startTime: 'Mar 2015',
      endTime: 'Jan 2017',
      description:
        '- Responsible for\n+ Doing verification AMBA generator tool using random test\n+ Doing verification Bus modules using combined test\n+ Applying Jenkins for regression test to reduce testing time\n+ Making script to generate test patterns\n- Experience in:\n+ Verification based on constrained random test-bench: SystemVerilog, UVM environment.\n+ Perl, Cshell\n+ Spyglass\n+ Synthesis\n+ Checker: HLDRC, DFTcheck, STAcheck'
    }
  ]
};

export default DATA;
