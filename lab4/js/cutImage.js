// function cutImage()
// {
// 	var container = document.getElementsByClassName('imgContainer')[0];
// 	var standardWidth = container.clientWidth;
// 	var standardHeight = container.clientHeight;
// 	const imgList = document.getElementsByClassName('contImg');
// 	for (let i = 0; i < imgList.length; i++)
// 	{
// 		if ((imgList[i].clientWidth/standardWidth) !== (imgList[i].clientHeight/standardHeight))
// 		{
// 			if ((imgList[i].clientWidth/standardWidth) > (imgList[i].clientHeight/standardHeight))
// 			{
// 				imgList[i].style.height = (standardHeight + "px");
// 				imgList[i].style.width = "auto";
// 				imgList[i].style.left=("-"+0.5*(imgList[i].clientWidth-standardWidth)+"px");
// 			}
// 			else
// 			{
// 				imgList[i].style.width = (standardWidth + "px");
// 				imgList[i].style.height = "auto";
// 				imgList[i].style.top=("-"+0.5*(imgList[i].clientHeight-standardHeight)+"px");
// 			}
// 		}
// 		else
// 		{
// 			imgList[i].style.height = (standardHeight + "px");
// 			imgList[i].style.width = (standardWidth + "px");
// 		}
// 	}
// }

var cutImage=(function ()
{
	return function ()
	{
		console.log(3);
		let containerList=document.getElementsByClassName('imgContainer');
		/*const container = document.getElementsByClassName('imgContainer')[0];
		const standardWidth = container.clientWidth;
		const standardHeight = container.clientHeight;*/
		let imgList = document.getElementsByClassName('contImg');
		for (let i = 0; i < imgList.length; i++)
		{
			let container = document.getElementsByClassName('imgContainer')[i];
			let standardWidth = container.clientWidth;
			let standardHeight = container.clientHeight;
			if ((imgList[i].clientWidth/standardWidth) !== (imgList[i].clientHeight/standardHeight))
			{
				if ((imgList[i].clientWidth/standardWidth) > (imgList[i].clientHeight/standardHeight))
				{
					imgList[i].style.height = (standardHeight + "px");
					imgList[i].style.width = "auto";
					imgList[i].style.left=("-"+0.5*(imgList[i].clientWidth-standardWidth)+"px");
				}
				else
				{
					imgList[i].style.width = (standardWidth + "px");
					imgList[i].style.height = "auto";
					imgList[i].style.top=("-"+0.5*(imgList[i].clientHeight-standardHeight)+"px");
				}
			}
			else
			{
				imgList[i].style.height = (standardHeight + "px");
				imgList[i].style.width = (standardWidth + "px");
			}
		}
	}
})();

window.onload = function ()
{
	cutImage();
};

window.onresize=function ()
{
	cutImage();
};

/*window.addEventListener("load",cutImage());
window.addEventListener("resize",cutImage());*/
