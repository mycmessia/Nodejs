/**
 * create a C++ file as
 * #include <iostream>
 * 
 * int main(void)
 * {
 * 	return 0;
 * }
 *
 */

var fs = require("fs");
var oDate = new Date;

var title = process.argv[2];
var ws = fs.createWriteStream("./" + (title || "test") + "-" + 
				oDate.getFullYear() + "-" +
				(oDate.getMonth() + 1) + "-" +
				oDate.getDate() + "-" +
				oDate.getHours() + "-" +
				oDate.getMinutes() + ".cpp");

ws.write("#include <iostream>\n\n");
ws.write("int main(void)\n{\n\treturn 0;\n}");
