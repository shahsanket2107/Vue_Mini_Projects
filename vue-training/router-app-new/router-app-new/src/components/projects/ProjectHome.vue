<template>
    <div>
      <h2>Project Home</h2>
      <ul>
        <li v-for="project in projects" :key="project.projectID">
          <router-link :to="{ name: 'projectDetails', params: { id: project.projectID } }">
            {{ project.projectID }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ProjectData } from './ProjectData';
  export default {
    name: 'ProjectHome',
    data() {
      return {
        projects: ProjectData.projects
      }
    }
  }
  </script>
  