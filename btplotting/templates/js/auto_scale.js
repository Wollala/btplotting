clearTimeout(window._autoscale_timeout);
let date = source.data.date,
    low = source.data.low,
    high = source.data.high,
    start = cb_obj.start,
    end = cb_obj.end,
    min = Infinity,
    max = -Infinity;

for (let i=0; i < date.length; ++i) {
    if (start <= i && i <= end) {
        max = Math.max(high[i], max);
        min = Math.min(low[i], min);
    }
}

const pad = (max - min) * .05;

console.log("min: ", min, "max: ", max, "pad", pad)
window._autoscale_timeout = setTimeout(function() {
    y_range.start = min - pad;
    y_range.end = max + pad;
});