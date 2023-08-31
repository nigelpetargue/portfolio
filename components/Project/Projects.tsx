'use client';

import styles from '@/styles/projects.module.scss';
import SectionHeader from '../SectionHeader';
import Project from './Project';
import { projects } from '@/utils/projects';

export default function Projects() {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
}
