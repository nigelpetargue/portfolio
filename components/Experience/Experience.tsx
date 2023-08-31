'use client';

import styles from '@/styles/experience.module.scss';
import ExperienceItem from './ExperienceItem';
import SectionHeader from '../SectionHeader';
import { experience } from '@/utils/experience';

export default function Experience() {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
}
