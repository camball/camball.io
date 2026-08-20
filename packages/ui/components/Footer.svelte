<script lang="ts">
    // 2022 is the date of oldest content on the site
    const date = `2022–${new Date().getFullYear()}`;
</script>

<footer class="space-y-6 bg-stone-100 dark:bg-stone-900">
    <pre class="pt-6 text-center leading-4 tracking-[-0.125em]">
⠀⣀⣤⡀⠀⠀⢀⣀⠀⢀⡤⣄⡀⢀⣀⣠⣤⣤⣄⣀⠀⠀⠀⢀⣀⣤⣤⣤⣀⣀⠀⣠⡤⡄⠀⢀⡀⠀⠀⢀⣠⣄⡀
⢸⠋⢠⡽⠀⣴⠋⢩⣿⢈⣡⡽⠿⠿⠛⣩⠴⠒⠒⠺⣷⣻⣷⠿⠒⠒⠢⣭⡙⠻⠿⠿⣤⡁⢼⣫⠙⢷⡀⢸⡧⠈⢳
⠘⢦⡀⠀⠀⢧⣀⡼⠿⠋⠁⠀⣠⡴⠋⠁⠀⠀⠀⠀⠈⣿⡇⠀⠀⠀⠀⠀⠙⠳⣄⡀⠀⠙⠻⢧⣄⣸⠃⠀⢀⣠⠏
⠀⠀⠀⠉⠉⠉⠓⠤⠤⠤⠴⠛⠁⠀⠀⠀⠀⠸⣟⣀⡼⣿⢷⣄⣛⡵⠀⠀⠀⠀⠈⠙⠲⠤⠤⠤⠜⠋⠉⠉⠁⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠹⠷⣿⠷⠏⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</pre>
    <!-- TODO: Replace these two lines with spinning 3js animation. -->
    <!-- TODO: For now, desktop- and mobile-specific versions b/c hearts -->
    <!-- TODO: render slightly different on commonm mobile browsers. -->
    <p class="px-6 text-right sm:hidden">₊˚⊹ Made with ❤ by Cameron.</p>
    <p class="hidden px-6 text-right sm:block sm:px-12">₊˚⊹ Made with ♥ by Cameron.</p>

    <div class="space-y-2 px-6 pb-6 sm:px-12">
        <p>{`Copyright © ${date} Cameron Ball. All rights reserved.`}</p>
        <p>
            Opinions on this site are my own and are not those of any of my employers, past,
            present, and/or future.
        </p>
    </div>
</footer>
