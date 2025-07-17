import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  technologies = [
    { name: 'Angular', iconClass: 'devicon-angularjs-plain', color: '#e57373' },
    { name: 'TypeScript', iconClass: 'devicon-typescript-plain', color: '#64b5f6' },
    { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain', color: '#7986cb' },
    { name: 'Vue.js', iconClass: 'devicon-vuejs-plain', color: '#81c784' },
    { name: 'Laravel', iconClass: 'devicon-laravel-plain', color: '#f06292' },
    { name: 'PHP', iconClass: 'devicon-php-plain', color: '#b39ddb' },
    { name: 'JavaScript', iconClass: 'devicon-javascript-plain', color: '#fff176' }
  ];

  projects = [
     {
      title: 'UTF-HUB',
      description: 'A ideia central da aplicação é simular uma plataforma acadêmica digital que ajude calouros com a adaptação ao ambiente universitário.',
      previewImage: '../assets/tela-utfhub.png',
      siteUrl: 'https://utf-hub.netlify.app/',
      githubUrl: 'https://github.com/lanamaiumy/utf-hub/tree/main'
    },
    { title: 'EM BREVE', description: 'logo logo postarei mais projetos ;)'},
    { title: '---', description: '-'},
    { title: '---', description: '-'},
    { title: '---', description: '-'},
    { title: '---', description: '-'}
  ];

  selectedProject: any = null;

  openModal(project: any) {
    this.selectedProject = project;
  }

  closeModal() {
    this.selectedProject = null;
  }

  goToLinks() {
  if (!this.selectedProject) return;
  window.open(this.selectedProject.siteUrl, '_blank');
  window.open(this.selectedProject.githubUrl, '_blank');
}
}
