if(localStorage.list){
    newList = localStorage.list;
    newList = newList.split(",");
    console.log(newList);
}
else{
    newList = [];
}
var app = new Vue({
    el : '#app',
    data : {
        listItems : newList,
        item : ""
    },
    methods : {
        clearInput : function(){
            document.getElementById('newItem').value = ''
        },
        addItem : function(item){
            if (item != ""){
                this.listItems.push(item);
                this.item="";
                localStorage.list = this.listItems;
            }
            else {
                return 0;
            }
        },
        removeItem : function(item){
            this.listItems.splice(this.listItems.indexOf(item),1);
            localStorage.list = this.listItems;
        }
    }
})

$("#newItem").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#submit").click();
    }
});