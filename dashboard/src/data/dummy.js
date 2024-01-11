import React from 'react';
import {FiCreditCard} from 'react-icons/fi';
import { BsCurrencyDollar, BsShield} from 'react-icons/bs';

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const links = [
  {
    title: 'Chapter 1',
    links: [
      {
        name: 'Paragraph 1',
      },
      {
        name: 'Paragraph 2',
      },
      {
        name: 'Paragraph 3',
      },
      {
        name: 'Quiz 1',
      },
    ],
  },

  {
    title: 'Chapter 2',
    links: [
      {
        name: 'Paragraph 4',
      },
      {
        name: 'Paragraph 5',
      },
      {
        name: 'Paragraph 6',
      },
      {
        name: 'Quiz 2',
      },
    ],
  },
  {
    title: 'Chapter 3',
    links: [
      {
        name: 'Paragraph 7',
      },
      {
        name: 'Paragraph 8',
      },
      {
        name: 'Paragraph 9',
      },
      {
        name: 'Quiz 3',
      },
    ],
  },
  {
    title: 'Certificate',
    links: [
      {
        name: 'Certificate',
      },
    ],
  },
];


export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];
