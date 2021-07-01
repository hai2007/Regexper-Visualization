export default function (min, max) {

    let purview = "";
    if (min == -1) purview = '<=' + max;
    else if (max == -1) purview = '>=' + min;
    else if (min == max) purview = min + "次";
    else purview = min + " ~ " + max;

    return purview;
};
