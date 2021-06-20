async function rainbow() {
    await delayedColorChange('red', 1000) // sistam executia prin await !!
    delayedColorChange('orange', 1000)
}