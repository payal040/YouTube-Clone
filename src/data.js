/*export const API_KEY = 'AIzaSyDeEMqJ0f8uEZ5RIf48z2U4gtXDr-4-chE';*/
export const API_KEY = "AIzaSyB3RB5QUB09BSPNIsrsRMviF_wfoZAtFzU";   

export const value_converter = (value) => {
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else
    {
        return value;
    }
}