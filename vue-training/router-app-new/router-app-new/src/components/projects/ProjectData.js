export const ProjectData = {
    projects: [
        { projectID: 101, projectName: 'HRMS', location: 'Paris', managerName: 'Mark' },
        { projectID: 102, projectName: 'Vue', location: 'Boston', managerName: 'Tony' },
        { projectID: 103, projectName: 'React', location: 'NYC', managerName: 'Steve' }
    ],

    deleteProjectById(id) {
        this.projects = this.projects.filter(project => project.projectID !== id);
    }
};