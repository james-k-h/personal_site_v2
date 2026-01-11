import sql from '../../../../public/images/skills/languages/sql.png';
import java from '../../../../public/images/skills/languages/java.png';
import typescript from '../../../../public/images/skills/languages/typescript.png';
import javascript from '../../../../public/images/skills/languages/js.png';
import python from '../../../../public/images/skills/languages/python.png';
import spring_boot from '../../../../public/images/skills/frameworks/spring_boot.png';
import django from '../../../../public/images/skills/frameworks/django.png';
import react from '../../../../public/images/skills/frameworks/react.png';
import android from '../../../../public/images/skills/tools/android.png';
import gradle from '../../../../public/images/skills/tools/gradle_1.png';
import firebase from '../../../../public/images/skills/tools/firebase.png';
import postman from '../../../../public/images/skills/tools/postman.png';
import power_bi from '../../../../public/images/skills/tools/power_bi.png';
import git from '../../../../public/images/skills/tools/git.png';
import postgres from '../../../../public/images/skills/tools/postgres.png';
import jira from '../../../../public/images/skills/tools/jira.png';
import next_js from '../../../../public/images/skills/frameworks/next_js.png';
import docker from '../../../../public/images/skills/tools/docker.png';
import kubernetes from '../../../../public/images/skills/tools/kubernetes.png';
import aws from '../../../../public/images/skills/tools/aws.png';
import gcp from '../../../../public/images/skills/tools/gcp.png';
import github from '../../../../public/images/skills/tools/github.png';
import figma from '../../../../public/images/skills/tools/figma.png';
import expo from '../../../../public/images/skills/tools/expo.png';
import mongo from '../../../../public/images/skills/tools/mongo.png';
import kotlin from '../../../../public/images/skills/languages/kotlin.png';
import bash from '../../../../public/images/skills/languages/bash.png';
import pandas from '../../../../public/images/skills/frameworks/pandas.png';
import numpy from '../../../../public/images/skills/frameworks/numpy.png';
import react_native from '../../../../public/images/skills/frameworks/react_native.png';
import { compareDesc, parseISO } from 'date-fns';

export {
  mongo,
  expo,
  sql,
  java,
  javascript,
  python,
  spring_boot,
  django,
  react,
  android,
  gradle,
  firebase,
  postgres,
  postman,
  power_bi,
  jira,
  git,
  next_js,
  docker,
  kubernetes,
  aws,
  gcp,
  github,
  figma,
};

export const p_l_f = [
  {
    label: 'Java',
    src: java,
  },
  {
    label: 'JavaScript',
    src: javascript,
  },
  {
    label: 'TypeScript',
    src: typescript,
  },
  {
    label: 'Python',
    src: python,
  },
  {
    label: 'SQL',
    src: sql,
  },
  {
    label: 'Bash',
    src: bash,
  },
  {
    label: 'Kotlin',
    src: kotlin,
  },
  {
    label: 'Spring Boot',
    src: spring_boot,
  },
  {
    label: 'React',
    src: react,
  },
  {
    label: 'Next.js',
    src: next_js,
  },
  {
    label: 'Django',
    src: django,
  },
  {
    label: 'Pandas',
    src: pandas,
  },
  {
    label: 'Numpy',
    src: numpy,
  },
  {
    label: 'React Native',
    src: react_native,
  },
];
export const tools = [
  {
    label: 'Android Studio',
    src: android,
  },
  {
    label: 'Gradle',
    src: gradle,
  },
  {
    label: 'Power BI',
    src: power_bi,
  },
  {
    label: 'Firebase',
    src: firebase,
  },
  {
    label: 'Git',
    src: git,
  },
  {
    label: 'Postgres',
    src: postgres,
  },
  {
    label: 'Jira',
    src: jira,
  },
  {
    label: 'Postman',
    src: postman,
  },
  {
    label: 'Docker',
    src: docker,
  },
  {
    label: 'Kubernetes',
    src: kubernetes,
  },
  {
    label: 'AWS',
    src: aws,
  },
  {
    label: 'GCP',
    src: gcp,
  },
  {
    label: 'Github',
    src: github,
  },
  {
    label: 'Figma',
    src: figma,
  },
  {
    label: 'Expo',
    src: expo,
  },
  {
    label: 'Mongo',
    src: mongo,
  },
];

export const skills_description_array = [
  {
    name: 'Java',
    frameworks_libraries: `Spring Boot`,
    description: `Utilized for the server-side portion of a build with Spring Boot. 
    Well accustomed to using Java for mobile applications.
  `,
  },
  {
    name: 'Javascript',
    frameworks_libraries: `React, React-Native, Next.js, Node, Express, Redux, TypeScript`,
    description: `Experienced with Javascript as both a client-side scripting language, but also on the server-side as well.  `,
  },
  {
    name: 'Python',
    frameworks_libraries: `Django (REST Framework), Pandas, Numpy, Selenium`,
    description: `Personally, typical use cases for Python would be around scripting and automating tasks, or as a server-side framework for a full-stack web app. `,
  },
  {
    name: 'SQL',
    frameworks_libraries: `N/A `,
    description: `Versed in databases and SQL, the two choices for personal builds are typically either Mongo or Postgres.`,
  },
];

export const cx = (...classNames) => classNames.filter(Boolean).join(' ');
