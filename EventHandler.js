function EventHandler(arr)
{
    this.arr = arr;

    this.getEventsBetweenDates = function(start, end)
    {
        var returnArr = arr.filter(function(element) 
        {
            return element.dateStart >= start && element.dateEnd <= end;
        });
        return returnArr;
    };

    this.getByMonth = function(month)
    {
        var returnArr = arr.filter(function(element) 
        {
            var dateArray = element.dateStart.split("/");
            var monthNum = dateArray[1];
            if (parseInt(monthNum) == month)
            {
                return element;
            }
        });
        return returnArr;
    };

    this.getUniqueDateAndSort = function()
    {
        
    };

    this.getSummary = function(object)
    {
        if (arguments.length == 0) // No arguments given, use member variable array as list
        {
            var returnArr = [];
            arr.filter(function(element) 
            {
                if (element.dateStart == element.dateEnd) // 1 day event
                {
                    returnArr.push("On " + element.dateStart + ": " + element.name + " (" + element.description + ")");  
                }
                else // Multiple day event
                {
                    returnArr.push("From " + element.dateStart + " to " + element.dateEnd + ": " + element.name + " (" + element.description + ")");
                }
            });
            return returnArr;
        }
        else if (object.constructor === Array) // Object array given, use array of objects as list
        {
            var returnArr = [];
            object.filter(function(element) 
            {
                if (element.dateStart == element.dateEnd) // 1 day event
                {
                    returnArr.push("On " + element.dateStart + ": " + element.name + " (" + element.description + ")");  
                }
                else // Multiple day event
                {
                    returnArr.push("From " + element.dateStart + " to " + element.dateEnd + ": " + element.name + " (" + element.description + ")");
                }
            });
            return returnArr;
        }
        else if (arguments.length > 1) // Multiple objects given, summarise each
        {
            var args = Array.prototype.slice.apply(arguments);
            var returnArr = [];
            args.filter(function(element)
            {
                if (element.dateStart == element.dateEnd) // 1 day event
                {
                    returnArr.push("On " + element.dateStart + ": " + element.name + " (" + element.description + ")");  
                }
                else // Multiple day event
                {
                    returnArr.push("From " + element.dateStart + " to " + element.dateEnd + ": " + element.name + " (" + element.description + ")");
                }
            });
            return returnArr;
        }
    };
}




Array.prototype.getEventsBetweenDates = function(start, end)
{
    var returnArr = this.filter(function(element) 
        {
            return element.dateStart >= start && element.dateEnd <= end;
        });
        return returnArr;
};

Array.prototype.getSummary = function(object)
{
    var returnArr = [];
    this.filter(function(element)
    {
        if (element.dateStart == element.dateEnd) // 1 day event
        {
            returnArr.push("On " + element.dateStart + ": " + element.name + " (" + element.description + ")");  
        }
        else // Multiple day event
        {
            returnArr.push("From " + element.dateStart + " to " + element.dateEnd + ": " + element.name + " (" + element.description + ")");
        }
    });
    return returnArr;
};

Array.prototype.getUniqueDateAndSort = function()
{

};

Array.prototype.getByMonth = function(month)
{
    var returnArr = this.filter(function(element) 
        {
            var dateArray = element.dateStart.split("/");
            var monthNum = dateArray[1];
            if (parseInt(monthNum) == month)
            {
                return element;
            }
        });
        return returnArr;
};



// var Handler = new EventHandler(events);
// console.log(Handler.getEventsBetweenDates("2022/05/13", "2022/06/12"));
// console.log(Handler.getByMonth(05));
// console.log(Handler.getSummary());
// console.log(Handler.getByMonth(06).getSummary());


