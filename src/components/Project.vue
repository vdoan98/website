<template>
    <div>
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
    props: ['project']
}
</script>

<style>

</style>