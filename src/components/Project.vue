<template>
    <div>
        <h3> Short Descriptions </h3>
        <h5><a :href="project.link">{{project.title}}</a></h5>
        <img :src="project.image">
        <p>{{project.description}}</p>

        <p>Show more</p>
    </div>
</template>

<script>
/*
    Short format
    {
        title: "Fyyur",
        image: "image link",
        description: "....."
    }
/*
/*
    Long format
    {
        title: "Fyyur"
        image: "image link",
        description: "....",
        techStack: [
            "",
            "",
            ...
        ]
    }
*/

export default{
    name: "Project",
    props: {
        project: JSON
    }
}
</script>

<style>

</style>