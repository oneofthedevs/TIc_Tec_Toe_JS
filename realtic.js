function find()
		{ 
			var temp=0;
			for(var i=0;i<3;i++)
			{
				for(var j=0;j<3;j++)
				{
					if(gridvalue[i][j]==0)
					{
						gridvalue[i][j]=2;
						var abc=checknextmove();
						if(abc=="no change")
						{
							
							temp=1;
							break;
						}
						else
						{
					
							var s=abc.split(",");
							gridvalue[i][j]=0;
							gridvalue[parseInt(s[0])][parseInt(s[1])]=2;
							temp=1;
							break;
						}
						
					}
				}
				if(temp==1)
				{break;}
			}	
		}
		function getResult()
		{
			var result = check();
			
			if(result == 1)
			{
				return "player";
			}
			else if(result == -1)
			{
				return "no one";
			}
			else
			{
				return "computer";
			}
			
		}
		function checknextmove()
		{
		var choice;
			for(var i=0;i<3;i++)
			{
				for(var j=0;j<3;j++)
				{
					if(gridvalue[i][j]==0)
					{
						gridvalue[i][j]=1;
						if(getResult()=="player")
						{
							gridvalue[i][j]=0;
							var str=i+","+j;
							return str;
							
						}
						else
						{
							choice="no change";
							gridvalue[i][j]=0;
							
						}	
						
					}
				}
			}
			return choice;
			
		}
		function checkIfDraw()
		{
			var checkvalue=0;
			for(var i=0;i<3;i++)
			{
					for(var j=0;j<3;j++)
					{
						if(gridvalue[i][j]!=0)
						{
							checkvalue=1;
						}
						else
						{
							checkvalue=0;
							break;
						}
					}
					
					
			}
			if(checkvalue==1)
			{
						return 1;
			}
			return 0;
			
		}
		function check()
		{
			
			for(var i=0;i<3;i++)
			{
					if(gridvalue[i][0]==gridvalue[i][1]&&gridvalue[i][1]==gridvalue[i][2]&&gridvalue[i][0]!=0)
					{
						return gridvalue[i][0];
					}
					if(gridvalue[0][i]==gridvalue[1][i]&&gridvalue[1][i]==gridvalue[2][i]&&gridvalue[0][i]!=0)
					{
						return gridvalue[0][i];
					}
			}
			if(gridvalue[0][0]==gridvalue[1][1]&&gridvalue[1][1]==gridvalue[2][2]&&gridvalue[0][0]!=0)
			{
				return gridvalue[0][0];
			}
			if(gridvalue[0][2]==gridvalue[1][1]&&gridvalue[1][1]==gridvalue[2][0]&&gridvalue[2][0]!=0)
			{
				return gridvalue[1][1];
			}
			
			return -1;
		}
		var gridvalue=[[0,0,0],[0,0,0],[0,0,0]];
		var player=[0,0];
		var symbol=[" ","X","O"]
		var i=2;
		var r,c;

			player[0]=prompt("enter player's name");
			player[1]="Computer"
			while(1==1)
			{
				
				
				for(var gr=0;gr<3;gr++)
				{				
						console.log(symbol[gridvalue[gr][0]]+"|"+symbol[gridvalue[gr][1]]+"|"+symbol[gridvalue[gr][2]]);					
				}
				
				var move=prompt("(Please enter a number between 1 to 9): ");
				var r,c;
				r=parseInt((move-1)/3);
				c=parseInt((move-1)%3);
				if(gridvalue[r][c]==0)
				{
					gridvalue[r][c]=1;
					//console.log("value set at gridvalue["+r+"]["+c+"]is "+gridvalue[r][c]+"");
					
					if(check()!=(-1))
					{
						console.log(player[check()-1]+" won the game");
						break;
					}
					else if(checkIfDraw()==1)
					{
						console.log("the game is draw");
						break;
					}
					find();
					if(check()!=(-1))
					{
						console.log(player[check()-1]+" won the game");
						break;
					}
					else if(checkIfDraw()==1)
					{
						console.log("the game is draw");
						break;
					}
					
					
				}
				else
				{
					//console.log(gridvalue[r][c]);
					console.log("place is occupied try again!!!!");

				}
			}