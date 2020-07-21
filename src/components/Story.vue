<template>
    <div class="container" lazy>
        <div class="hideme" >I was born in Ho Chi Minh City, Vietnam</div>
        <h2> </h2>

    </div>
</template>

<script>
// Change text on scroll
// Change background art on scroll. Ho Chi Minh City fades 
// while U.S. background emerges 
export default {
    name: 'Story',
    mounted(){
        this.scrollChange();
    },
    methods: {
        scrollChange: function(){
            var elements = document.querySelector(".hideme")
            window.onscroll = function(){
                elements.forEach( function(i){

                    var bottom_of_object = i.offsetTop + i.offsetHeight;
                    var bottom_of_window = window.scrollTop() + window.innerHeight;

                    /* If the object is completely visible in the window, fade it in */
                    if( bottom_of_window > bottom_of_object ){

                        i.animate({'opacity':'1'},500);

                    }

                }); 
            };
        }
    }
    /** data: function(){
        return {
            content: [
                "I was born in Ho Chi Minh City, Vietnam",
                "I now live in the U.S."
            ],
            part: 0,
            part_index: 0,
            interval_val: null,
            container: document.querySelector(".container")
        }
    },
    mounted(){
        this.interval_val = setInterval(this.type, 100);
    },
    methods: {
        type: function(){
            var text = this.content[this.part].substring(0, this.part_index + 1);
            var elem = document.querySelector("#change-text");
            var cursor = document.querySelector("#cursor");
            elem.innerHTML = text;
            this.part_index++;

            if (text === this.content[this.part]){
                cursor.style.display = 'none';

                clearInterval(this.inteval_val);
                setTimeout(function(){
                    this.interval_val = setInterval(this.delete, 50);
                }, 1000);
            }
        },
        delete: function(){
            var text = this.content[this.part].substring(0, this.part_index - 1)
            var elem = document.querySelector("#change-text");
            var cursor = document.querySelector("#cursor");
            elem.innerHTML = text;
            this.part_index--;

            if(text === ''){
                clearInterval(this.interval_val);
            }
            if(this.part == (this.content.length - 1)){
                this.part = 0;
            }else{
                this.part++;
            }

            this.part_index = 0;

            setTimeout(function(){
                cursor.style.display = 'inline-block';
                this.inteval_val = setInterval(this.type, 100);
            }, 200);
        
        },
    
        show: function(){
            
        }
    }
  */
    
}  
</script>

<style>
.container{
    position: absolute;
    justify-content: center;
    align-items: center;
    max-height: 100vh;
    min-width: 100vw;
    min-height: 100vh;
}

#change-text {
  transition: all 1s;
  position: absolute;
  height: 40px;
  opacity: 0;

}

#header.active {
  opacity: 1;
}
</style>