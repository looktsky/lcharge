/*本地数据库模块*/
var dataBase = function(dataBase){
	
	//创建数据库
	var db = null;
	dataBase.start = function(name,vsion,title,size,callback){
	    db = openDatabase(name,vsion,title,size,callback);
	    return db || false;
	}
	
	//创建账单表
	dataBase.creatBillsTable = function(){
		db.transaction(function (tx) {  
   			tx.executeSql('CREATE TABLE IF NOT EXISTS bills(id unique,date,num,type)');
		});
	}
	
	//创建记账菜单表
	dataBase.creatMenusTable = function(){
		db.transaction(function (tx) {  
   			tx.executeSql('CREATE TABLE IF NOT EXISTS menus(id unique, mname, mtype)');
		});
	}
	
	//添加账单记录
	dataBase.insertBillsTable = function(arr){
		db.transaction(function (tx) {  
   			tx.executeSql('INSERT INTO BILLS (id, date, num, type) VALUES (?,?,?,?)',arr);
		});
	}
	
	//添加菜单记录
	dataBase.insertMenusTable = function(arr){
		db.transaction(function (tx) {  
   			tx.executeSql('INSERT INTO MENUS (id, mname, mtype) VALUES (?,?,?)',arr);
		});

	}
	
	//默认值初始化
	dataBase.init  = function(){
　　　　　　dataBase.start('lcharge','1.0','L记账',20*1024*1024,function(){});
		dataBase.db = db;
　　　　　　dataBase.creatBillsTable();
		dataBase.creatMenusTable();
	}
	
	return dataBase;
}(window.dataBase || {});

