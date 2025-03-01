const types=
{
	"float64":1,
	"float32":2,
	"float16":3,
//gap of two incase I decide to add uint
	"int64":5,
	"int32":7,
	"int16":9,
	"int8":11
};
const typesAdd=
{
	"string":0,
	"float64":1,
	"float32":2,
	"float16":3,
//gap of two incase I decide to add uint
	"int64":5,
	"int32":7,
	"int16":9,
	"int8":11
};
function Int8(data)
{
	this.type="int8";
	this.value=new Int8Array([data]);
	this.set=function(newValue)
	{
		this.value[0]=newValue;
	}
	this.get=function()
	{
		return newValue;
	}
}
function Int16(data)
{
	this.type="int16";
	this.value=new Int16Array([data]);
	this.set=function(newValue)
	{
		this.value[0]=newValue;
	}
	this.get=function()
	{
		return newValue;
	}
}
function Int32(data)
{
	this.type="int32";
	this.value=new Int32Array([data]);
	this.set=function(newValue)
	{
		this.value[0]=newValue;
	}
	this.get=function()
	{
		return newValue;
	}
}
function Int64(data)
{
	this.type="int64";
	this.value=new BigInt64Array([data]);
	this.set=function(newValue)
	{
		this.value[0]=newValue;
	}
	this.get=function()
	{
		return newValue;
	}
}
function Float16(data)
{
	this.type="float16";
	this.value=new Float16Array(data);
	this.set=function(newValue)
	{
		this.value[0]=newValue;
	};
	this.get=function()
	{
		return newValue;
	};
}
function Float32(data)
{
	this.type="float32";
	this.value=new Float32Array(data);
	this.set=function(newValue)
	{
		this.value[0]=newValue;
	};
	this.get=function()
	{
		return newValue;
	};
}
function Float64(data)
{
	this.type="float64";
	this.value=new Float64Array(data);
	this.set=function(newValue)
	{
		this.value[0]=newValue;
	};
	this.get=function()
	{
		return newValue;
	};
}