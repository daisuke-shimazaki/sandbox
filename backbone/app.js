(function(){
 
    console.log("Hello Backbone!");
	 
	var obj = new Backbone.Model();
	 
	obj.set({name: "Murata"});
	obj.set({age: 20});
	 
	console.log("obj: " + JSON.stringify(obj));
	console.log("obj.name: " + obj.get("name"));

	var obj2 = new Backbone.Model({name: "Kenichiro", age: 30});

	var objs = new Backbone.Collection([obj, obj2]);
	console.log("objs: " + JSON.stringify(objs));
	 
	console.log("objs.get(cid): " + JSON.stringify(objs.get("c1")));
	console.log("objs.at(index): " + JSON.stringify(objs.at(0)));

	// add
	objs.add(new Backbone.Model({name: "Acroquest", age: 20}));
	objs.add(new Backbone.Model({name: "Technology", age: 10}));
	 
	// length
	console.log("objs.length: " + objs.length);
	console.log("objs: " + JSON.stringify(objs));

	// sort and comparator
	objs.comparator = function(item) {
	    return item.get("age");
	};
	 
	objs.sort();
	console.log("After sort objs: " + JSON.stringify(objs));
	console.log("After sort objs.at(index): " + JSON.stringify(objs.at(0)));

}());