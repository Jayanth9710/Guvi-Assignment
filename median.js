function getMedian(arr1, arr2, n)
{
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;

    for(count=0;count<=n;count++){
        if(i==n){
            m1=m2;
            m2=arr2[0];
            break;
        }
        else if (j==n)
        {
            m1=m2;
            m2=arr1[0];
            break;  
        }

        if (arr1[i] <= arr2[j])
        {
            m1 = m2; 
            m2 = arr1[i];
            i++;
    }
    else
    {
        m1 = m2; 
        m2 = arr2[j];
        j++;
    }
}

return (m1 + m2)/2;
}

var arr1 = [1, 12, 15, 26, 38];
var arr2 = [2, 13, 17, 30, 45];
var n1 = arr1.length;
var n2 = arr2.length;
console.log(getMedian(arr1, arr2, n1));