import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Project } from './project.interface';
import { ProjectPanel } from './components/project-panel/project-panel';

@Component({
  selector: 'app-projects-page',
  imports: [ProjectPanel, CommonModule],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css',
})
export class ProjectsPage {
  public projects: Project[] = [
    {
      id: 1,
      name: 'Project Name',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatibus vel maiores
        natus numquam dignissimos quia quidem, optio ab tempore maxime placeat illum magni
        repudiandae, assumenda tenetur odit fugiat enim?`,
      projectUrl: 'https://www.example.com',
      sourceCodeUrl: 'https://www.example.com',
    },
    {
      id: 2,
      name: 'Project Name',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatibus vel maiores
        natus numquam dignissimos quia quidem, optio ab tempore maxime placeat illum magni
        repudiandae, assumenda tenetur odit fugiat enim?`,
      projectUrl: 'https://www.example.com',
      sourceCodeUrl: 'https://www.example.com',
    },
  ];
}
