export default {
  name: 'tweet',
  title: 'Tweet ',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text in tweet',
      type: 'string',
    },
    {
      name: 'blockTweet',
      title: 'Block tweet',
      type: 'boolean',
      description:'Toggle if tweet deemed unwanted',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string'
    },
    {
      name: 'profileimg',
      title: 'Profile Image',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Tweet image',
      type: 'string'
    },
  ],

}
