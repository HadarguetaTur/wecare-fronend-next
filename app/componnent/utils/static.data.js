import { FaDumbbell, FaHeart, FaImages, FaKey, FaLanguage, FaRegBell, FaUser } from "react-icons/fa";

import {  FaBook, FaPaintBrush, FaGamepad, FaMusic } from 'react-icons/fa';
import { RiGroupLine, RiEmotionSadLine, RiHandHeartLine, RiPencilLine, RiBikeLine, RiLightbulbLine, RiLayoutGridLine } from 'react-icons/ri';

export const emptyPostData = {
  _id: '',
  post: '',
  bgColor: '',
  privacy: '',
  feelings: '',
  gifUrl: '',
  profilePicture: '',
  image: '',
  userId: '',
  username: '',
  email: '',
  avatarColor: '',
  commentsCount: '',
  reactions: [],
  imgVersion: '',
  imgId: '',
  createdAt: ''
};


export const reactionsColor = {
  like: '#50b5ff',
  love: '#f33e58',
  angry: '#e9710f',
  happy: '#f7b124',
  sad: '#f7b124',
  wow: '#f7b124'
};

export const notificationItems = [
  {
    index: 0,
    title: 'Direct Messages',
    description: 'New direct messages notifications.',
    toggle: true,
    type: 'messages'
  },
  {
    index: 1,
    title: 'Follows',
    description: 'New followers notifications.',
    toggle: true,
    type: 'follows'
  },
  {
    index: 2,
    title: 'Post Reactions',
    description: 'New reactions for your posts notifications.',
    toggle: true,
    type: 'reactions'
  },
  {
    index: 3,
    title: 'Comments',
    description: 'New comments for your posts notifications.',
    toggle: true,
    type: 'comments'
  }
];

export const tabItems = (showPassword, showNotification) => {
  const items = [
    { key: 'Timeline', show: true, icon: <FaUser className="banner-nav-item-name-icon" /> },
    { key: 'Followers', show: true, icon: <FaHeart className="banner-nav-item-name-icon" /> },
    { key: 'Gallery', show: true, icon: <FaImages className="banner-nav-item-name-icon" /> },
    {
      key: 'Change Password',
      show: showPassword,
      icon: <FaKey className="banner-nav-item-name-icon" />
    },
    {
      key: 'Notifications',
      show: showNotification,
      icon: <FaRegBell className="banner-nav-item-name-icon" />
    }
  ];
  return items;
};

export const subjects = [
    {
        label: 'Physical Development',
        icon: <RiBikeLine />,
        description: 'Motor Skills',
      },
      {
        label: 'Cognitive Development',
        icon: <FaBook />,
        description: 'Thinking Skills',
      },
      {
        label: 'Emotional Development',
        icon: <RiEmotionSadLine />,
        description: 'Emotional Well-being',
      },
      {
        label: 'Social Development',
        icon: <RiGroupLine />,
        description: 'Interactions',
      },
      {
        label: 'Creative Development',
        icon: <FaPaintBrush />,
        description: 'Artistic Expression',
      },
      {
        label: 'Language Development',
        icon: <RiPencilLine />,
        description: 'Communication Skills',
      },
      {
        label: 'Physical Health',
        icon: <FaHeart />,
        description: 'Healthy Lifestyle',
      },
      {
        label: 'Play and Recreation',
        icon: <FaGamepad />,
        description: 'Fun Activities',
      },
      {
        label: 'Music and Movement',
        icon: <FaMusic />,
        description: 'Rhythm and Dance',
      },
      {
        label: 'Character Development',
        icon: <RiHandHeartLine />,
        description: 'Values and Ethics',
      },
      {
        label: 'Language Learning',
        icon: <FaLanguage />,
        description: 'Multilingual Skills',
      },
      {
        label: 'Problem Solving',
        icon: <RiLightbulbLine />,
        description: 'Critical Thinking',
      },
      {
        label: 'Physical Education',
        icon: <FaDumbbell />,
        description: 'Fitness and Exercise',
      },
      {
        label: 'Spatial Awareness',
        icon: <RiLayoutGridLine />,
        description: 'Spatial Reasoning',
      },
];

export const avatarColors = [
  '#f44336',
  '#e91e63',
  '#2196f3',
  '#9c27b0',
  '#3f51b5',
  '#00bcd4',
  '#4caf50',
  '#ff9800',
  '#8bc34a',
  '#009688',
  '#03a9f4',
  '#cddc39',
  '#2962ff',
  '#448aff',
  '#84ffff',
  '#00e676',
  '#43a047',
  '#d32f2f',
  '#ff1744',
  '#ad1457',
  '#6a1b9a',
  '#1a237e',
  '#1de9b6',
  '#d84315'
];


export const availability = {
  sunday: {
    available: false,
    startTime: "",
    endTime: "",
  },
  monday: {
    available: false,
    startTime: "",
    endTime: "",
  },
  tuesday: {
    available: false,
    startTime: "",
    endTime: "",
  },
  wednesday: {
    available: false,
    startTime: "",
    endTime: "",
  },
  thursday: {
    available: false,
    startTime: "",
    endTime: "",
  },
  friday: {
    available: false,
    startTime: "",
    endTime: "",
  },
  saturday: {
    available: false,
    startTime: "",
    endTime: "",
  },
};
