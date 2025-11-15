import { Component, Input } from '@angular/core';

import { Laptop } from '../../../../shared/laptop/laptop';
import { Project } from '../../project.interface';

@Component({
  selector: 'app-project-panel',
  imports: [Laptop],
  templateUrl: './project-panel.html',
  styleUrl: './project-panel.css',
})
export class ProjectPanel {
  @Input() project!: Project;
}
