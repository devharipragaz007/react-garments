/* eslint-disable eqeqeq */
export function validateForm(values, requiredFields)
{
    var t = 0;
    // eslint-disable-next-line array-callback-return
    Object.entries(values).map(function(value,id){
        if(requiredFields.includes(value[0]))
        {
            var val = value[1];
            if(val !== '' && val !== undefined && val !== null)
            {
                t++;
                return false;
            }
        }
    })
    if(t === requiredFields.length)
    {
        return true;
    }
    else{
        return false;
    }
}

function isset(val)
{
    return val !== undefined && val !== null && val !== 'null' && val !== "undefined"
}

function notEmpty(val)
{
    return val !== ""
}


export function issetNotEmpty(val = '')
{
    return isset(val) && notEmpty(val)
}

export function pad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}

export function checkBoolean(bool,defaultValue=false)
{
    return isset(bool) ? bool == 'true' || bool == true : defaultValue
}