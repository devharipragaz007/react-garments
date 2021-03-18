
import moment from 'moment';


export function getDateFormat()
{
    return "DD-MM-YYYY";
}

export function getMonthYearFormat()
{
    return "MMM-YYYY";
}

export function getDBDateFormat()
{
    return "YYYY-MM-DDTHH:mm:ss";
}

export function getTimeFormat()
{
    return "DD-MM-YYYY HH:mm:ss";
}

export function getDateTimeFormat()
{
    return "DD-MM-YYYY HH:mm:ss";
}

export function checkValidDate(date)
{
    var D = moment(date);
    return D.isValid();
}


export function getStandardDate(date=new Date())
{   
    return moment(date).format(getDateFormat());
}


export function getStandardTime(date=new Date())
{   
    return moment(date).format(getTimeFormat());
}


export function getStandardDateTime(date = new Date())
{   
    return moment(date).format(getDateTimeFormat());
}


export function getCurrentDate()
{
    // console.log(moment(new Date()).format(getDateFormat()), "Harish");
    // var date = moment(new Date()).format(getDateFormat());
    var date = moment(new Date()).format(getDateFormat());
    return date;
}


export function subtractDays(n=1,type="days")
{
    var date = moment().format(getDateFormat());
    
    return moment(date).subtract(n, type).format(getDateFormat());
}



export function addDays(date=getCurrentDate() ,n=1,type="days")
{
    return moment(date,getDateFormat()).add(n, type);
}


export function getDifferentBetweenTwoDate(start=new Date(),end=new Date(), format="minutes")
{
    return moment(start, getDBDateFormat()).diff(moment(end, getDBDateFormat()),format);
}

export function getStartDateOfMonth(date = new Date())
{
    return moment(date).startOf('month').format(getDateFormat());
}

export function getEndDateOfMonth(date = new Date())
{
    return moment(date).endOf('month').format(getDateFormat());
}

export function getYearFromDate(date = new Date())
{
    return moment(date,getDateFormat()).year();
}

export function getMonthFormatFromDate(date = new Date())
{
    const MOMENT_DATE = moment(date, getDBDateFormat());
    const MONTH = MOMENT_DATE.month();
    return MOMENT_DATE.month(MONTH).format(getMonthYearFormat());
}