(function(){
    const uploaders= document.querySelectorAll(".js-upload");
    Array.from(uploaders, uploader => {
        const upload     = uploader.querySelector(".js-upload-value"),
              placeholder= uploader.querySelector(".js-upload-placeholder"),
              remove     = uploader.querySelector(".js-upload-remove");
    
        upload.addEventListener("change", function(event){
            const img= this.files[0];
            let reader= new FileReader();
            reader.readAsDataURL(img);
            reader.onloadend= () => {
                uploader.classList.add("has-image");
                placeholder.src= reader.result;
            }
        })        

        remove.addEventListener("click", e => {
            upload.value= null;
            uploader.classList.remove("has-image");
            placeholder.src= "";
        })

    });
})();