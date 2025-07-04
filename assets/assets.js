import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logodark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';  
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import androidstudio_logo from './androidstudio_logo.png';
import xcodeIcon from './xcodeicon.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logodark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    androidstudio_logo,
    xcodeIcon,
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
  { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
  { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
  { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
  { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]
export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: 'Skills',
    content: {
      filters: ['All', 'Language', 'Mobile', 'Web', 'Game', 'Database', 'Tool', 'UiUx'],
      items: [
        { name: 'Python', type: 'Language' },
        { name: 'Java', type: 'Language' },
        { name: 'JavaScript', type: 'Language' },
        { name: 'PHP', type: 'Language' },
        { name: 'C#', type: 'Language' },
        { name: 'C++', type: 'Language' },
        { name: 'Dart', type: 'Language' },
        { name: 'Kotlin', type: 'Language' },
        { name: 'Swift', type: 'Language' },
        { name: 'TypeScript', type: 'Language' }, // ✅ Added
      
        { name: 'React Native (Node.js)', type: 'Mobile' },
        { name: 'Flutter (Dart)', type: 'Mobile' },
        { name: 'Android Studio (Kotlin, Java)', type: 'Mobile' },
        { name: 'Xcode (Swift)', type: 'Mobile' },
      
        { name: 'HTML & CSS', type: 'Web' },
        { name: 'AngularJS', type: 'Web' },
        { name: 'Bootstrap', type: 'Web' },
        { name: 'ASP.NET', type: 'Web' },
        { name: 'Next.js', type: 'Web' }, 
        { name: 'Tailwind CSS', type: 'Web' }, 
      
        { name: 'Unity Engine (C#)', type: 'Game' },
        { name: 'Unreal Engine (C++, Blueprint)', type: 'Game' },
      
        { name: 'MySQL', type: 'Database' },
        { name: 'MSSQL', type: 'Database' },
        { name: 'MongoDB', type: 'Database' },
        { name: 'Firebase', type: 'Database' },
      
        { name: 'Visual Studio', type: 'Tool' },
        { name: 'Android Studio', type: 'Tool' },
        { name: 'Xcode', type: 'Tool' },
        { name: 'Sublime Text', type: 'Tool' },
        { name: 'Visual Studio Code', type: 'Tool' },
      
        { name: 'Figma', type: 'UiUx' },
        { name: 'Bootstrap', type: 'UiUx' }
      ]
    }
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: 'Education',
    content: [
      {
        degree: 'MBA in Information Technology',
        school: 'University of Information Technology and Management, Poland',
        date: 'Sep 2023 – Mar 2025',
        grade: '81.5% (4.5 / 5.0)'
      },
      {
        degree: 'BSc (Hons) in Computing',
        school: 'Arden University, United Kingdom',
        date: 'Sep 2020 – Sep 2023',
        grade: 'First Class Honours'
      }
    ]
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: 'Projects & Tools',
    content: [
      {
        category: "Master's Degree Projects",
        items: [
          {
            name: 'React Native E-Commerce App',
            link: 'https://github.com/junyuenchong/ReactNativeProjeect.git'
          },
          {
            name: 'Flutter Firebase App',
            link: 'https://github.com/junyuenchong/FlutterProject.git'
          }
        ]
      },
      {
        category: 'Degree Research Project',
        items: [
          {
            name: 'The Walking Evil Retribution (Unreal VR)',
            link: 'https://youtu.be/pW83vy4bqew'
          }
        ]
      },
      {
        category: 'Diploma Projects',
        items: [
          {
            name: 'PHP Hotel Booking Website',
            link: 'https://github.com/junyuenchong/PHP-Hotel-Booking-Website.git'
          },
          { name: '2D Game (Unity, ASP.NET, MS SQL)' },
          { name: 'E-Commerce Mobile App (Kotlin, Firebase)' }
        ]
      }
    ]
  }
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
  assets.androidstudio_logo,
  assets.xcodeIcon,
];
