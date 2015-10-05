module.exports = {
  cloud: {
    access_token: '46e5929deab7daaa7ee57986d993e6a5cce71e40782d01824ae1f23468bb7b84' //This is your Little Bits AccessToken under Cloud Control > Advanced Settings
  },
  twitter: {
    consumer_key: '73SE8bA9hi9MBx3qcth9IYwuI', // Get these by creating a twitter app apps.twitter.com/ 
    consumer_secret: 'eycU1GdXbNleMyY64dt4Z0GhXtOlyyV16vBGu0brsQx1fmVZDg',
    access_token_key: '242846164-EgSyrRLYIMMV0wZQLSTX9GitXTOgR5fp0HnFz7xE',
    access_token_secret: 'QnLDihrOI6yUP7HyZep3WQqRdZhvHZvQbDBB8UR5XH6pD'
  },
  mentions_duration: 10000, //Time duration it triggers for a mention in mili seconds ie 1000 = 1s
  retweet_duration: 3000, //Time duration it triggers for a retweet in mili seconds ie 1000 = 1s
  twitter_users: [
    { handle: '@lysolhelps',   // The twitter handle to listen for
      cloudBit: '243c200c0308' }  //This is your Little Bits Device ID under Cloud Control > Advanced Settings
      ,
    { handle: '@mikaila1989',   // The twitter handle to listen for
      cloudBit: 'bbb' }  //This is your Little Bits Device ID under Cloud Control > Advanced Settings
      ,
    { handle: '@lysol',   // The twitter handle to listen for
      cloudBit: 'ccc' }  //This is your Little Bits Device ID under Cloud Control > Advanced Settings
  ]

}
