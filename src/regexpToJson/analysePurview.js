export default function (express) {

    let purviews = [];
    for (let i = 0; i < express.length; i++) {
        if (express[i + 1] == '-') {
            purviews.push([
                express[i],
                express[i + 2]
            ]);
            i += 2;
        } else {
            purviews.push(express[i]);
        }
    }

    return purviews;
};
