clearTimeout(window._autoscale_timeout);
let date = source.data.date,
    low = source.data.low,
    high = source.data.high,
    start = cb_obj.start,
    end = cb_obj.end,
    min = Infinity,
    max = -Infinity;

start = (start >= 0) ? start : 0
end = (end >= 0) ? end : 0

high = high.slice(start, end)
low = low.slice(start, end)
max = Math.max(...high)
min =  Math.min(...low)

const pad = (max - min) * .05;

window._autoscale_timeout = setTimeout(function() {
    y_range.start = min - pad;
    y_range.end = max + pad;
});