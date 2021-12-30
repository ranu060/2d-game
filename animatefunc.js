function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // moving the background
    background_movement();
    // sprite movement
    show_guy();

    requestAnimationFrame(animate);
};
animate()