const username = {

'RNpGavFa5U9qngpmN5foAZhqVU8v5LMqq3':'Tur',
'RBrz3PtbqPo8ob6RjoBLQVkseLStxZuM97':'签到墙',
'MMrN8EkgSqDAbADv17YeHC48nsahxj1LNE':'tgichainxf',
'MVhYkA1QAaGDBQJEFaSppJkDnK9M4RaRcv':'chaos',
'MNimXsUw9GBKuBay2DiDuKWCjFnuiNNTGi':'chaowang',
'MQGBZFoDDJPNE6S2CZgKVEm8hCUtsJURU2':'zmy137',
'MLkmXTGYZDps4oNJroDR3LPmL1C593KUoz':'dongdong',
'M813U6VromjFoM5H1qJommvJHeUC8RgJ21':'ezezeze',
'MU8CaXxnCKY373sxgXUxVcfPYkjS8w9z5J':'tian',
'MLP6vhdVYD1aodrUWjZWCvzVSzscRqxaE1':'liang',
'MUaMoPifkPiZNchaaPeR9roHxNUo16c786':'测试1',

}



function usernameupdate(keyname){
	
	var name = username[keyname]
	// console.log(name)
	if(name){
		return username[keyname]
	}else{
		return keyname
	}
}





