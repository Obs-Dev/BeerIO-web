<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
  @include('partial.head')
</head>
<body>
    <div id="app">

      <!-- Always shows a header, even in smaller screens. -->
      <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
          <div class="mdl-layout__header-row">
            <!-- Title -->
            <span class="mdl-layout-title">{{ config('app.name', 'Laravel') }}</span>
            <!-- Add spacer, to align navigation to the right -->
            <div class="mdl-layout-spacer"></div>
            <!-- Navigation. We hide it in small screens. -->
            <nav class="mdl-navigation mdl-layout--large-screen-only">
              <a class="mdl-navigation__link" href="">Dashboard</a>
              <a class="mdl-navigation__link" href="">Friends</a>
              <a class="mdl-navigation__link" href="/beer">Brews</a>
              <a class="mdl-navigation__link" href="/beer">Discover</a>
              <a class="mdl-navigation__link" href="">About</a>
            </nav>
          </div>
        </header>
        <div class="mdl-layout__drawer">
          <span class="mdl-layout-title">{{ config('app.name', 'Laravel') }}</span>
          <nav class="mdl-navigation">
            <a class="mdl-navigation__link" href="">Dashboard</a>
            <a class="mdl-navigation__link" href="">Friends</a>
            <a class="mdl-navigation__link" href="/beer">Brews</a>
            <a class="mdl-navigation__link" href="/beer">Discover</a>
            <a class="mdl-navigation__link" href="">About</a>
          </nav>
        </div>
        <main class="mdl-layout__content">
          <div class="page-content">@yield('content')</div>
        </main>
        
        @include('partial.footer')

      </div>

    </div>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
