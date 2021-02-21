function fixIt(){
    let divs = getDivs();
    if(divs.length == 0){
        document.querySelector(".items").classList.add("invis");
        save();
        return;
    }
    if(divs.length == 1){
        document.querySelector(".items").classList.remove("invis");
        divs[0].classList.remove("lineEnd");
    } else {
        divs[divs.length-2].classList.add("lineEnd");
        divs[divs.length-1].classList.remove("lineEnd");
    }
    save();
}
function getNum(ids){
    let num = "";
    for(let i = 0; i < ids.length; i++){
        if(ids[i] >= "0" && ids[i] <= "9") num+=ids[i];
    }
    return Number(num);
}
function getLast(divs){
    if(divs.length != 0){
        return getNum(divs[divs.length-1].getAttribute("class"));
    }
    return 0;
}
function getDivs(){
    return document.querySelector(".items").getElementsByTagName("div");
}
function add(){
    let nameItem0 = document.querySelector("input[name='in-item']").value;
    if(nameItem0.trim() === "") {document.querySelector("input[name=\"in-item\"").value = "";return;}
    let divs = getDivs();
    let nameItem = "";
    let cnt_sym = 0;
    for(let i = 0; i < nameItem0.length; i++){
        nameItem+=nameItem0[i];
        if(cnt_sym>0 && cnt_sym%32==0) nameItem+=" ";
        if(nameItem0[i] == " ") cnt_sym = 0;
        cnt_sym++;
    }
    let div = document.createElement("div");
    div.setAttribute("class", "item-" + (getLast(divs)+1));
    div.innerHTML = `<input type="checkbox" onclick="done(this)">\n<p>${nameItem}</p>\n
    <button class = \"but-${getLast( divs )+1}\" onclick=\"del(this)\"><img class = \"trash\" src=\"trash.png\"></button>\t</div>`
    document.querySelector('.items').appendChild(div);
    document.querySelector("input[name='in-item'").value = "";
    fixIt();
}
function save(){
    localStorage.setItem("items", document.querySelector(".items").innerHTML);
}
function done(item){
    let parent = item.parentElement;
    if(item.checked){
        parent.classList.add("checked")
        item.setAttribute("checked","");
    } else {
        parent.classList.remove("checked");
        item.removeAttribute("checked");
    }
    save();
}
function del(id){
    id.parentElement.remove();
    fixIt();
}