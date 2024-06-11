<template>
    <div>
        <h2>Project Details</h2>
        <div v-if="project">
            <p>Project ID: {{ project.projectID }}</p>
            <p>Project Name: {{ project.projectName }}</p>
            <p>Location: {{ project.location }}</p>
            <p>Manager Name: {{ project.managerName }}</p>
            <router-link tag="button" :to="{
                name: 'projectEdit', params: { id: $route.params.id },
            }">
                Edit Project
            </router-link>

            <button @click="deleteProject">Delete Project</button>
        <hr>
        <button class="btn btn-warning" @click="backToMain">Back</button>

        </div>
    </div>
</template>

<script>
import { ProjectData } from './ProjectData';
export default {
    name: 'ProjectDetails',
    created() {
        const projectId = this.$route.params.id;
        this.project = ProjectData.projects.find(p => p.projectID === projectId);
    },

    methods:{
        backToMain() {
            this.$router.push("/projects");
        },

        deleteProject() {
            ProjectData.deleteProjectById(this.$route.params.id);
            alert('Project deleted!');
            console.log(ProjectData.projects)
            this.backToMain();
        },

    }
}
</script>