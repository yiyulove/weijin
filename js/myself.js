window.onload=function(){
	var ul1=document.querySelector(".widths");
	var allli=document.querySelectorAll(".widths li");
	for(var s=0;s<allli.length;s++)
	{
		allli[s].addEventListener("touchend",function(e){
			console.log("进来了")
			for(var k=0;k<allli.length;k++)
			{
				allli[k].style.backgroundColor="white";
				allli[k].style.borderBottom="none";
			}
			this.style.backgroundColor="deepskyblue";
			this.style.borderBottom="solid 3px red";
		})
	}
}
