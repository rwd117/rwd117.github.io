
var blockbox;


function canvasinit()
{
	// 20행 10열의 박스 생성
    blockbox=new Array();
    
	for(i=0;i<20;++i)
	{
		blockbox.push(new Array(10));
		for(j=0;j<10;++j) blockbox[i][j]=0;
	}
}