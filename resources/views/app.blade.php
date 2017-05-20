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
                <a class="mdl-navigation__link" href="">Dashboard2</a>
                <a class="mdl-navigation__link" href="">Friends</a>
                <router-link to="/items" class="mdl-navigation__link">Brews</router-link>
                <a class="mdl-navigation__link" href="/beer">Discover</a>
                <a class="mdl-navigation__link" href="">About</a>
                @if (Auth::check())
                          <a class="mdl-navigation__link" href="{{ url('/home') }}">{{ Auth::user()->email }}</a>
                      @else
                          <a class="mdl-navigation__link" href="{{ url('/login') }}">Login</a>
                          <a class="mdl-navigation__link" href="{{ url('/register') }}">Register</a>
                      @endif
              </nav>
            </div>
          </header>
          <div class="mdl-layout__drawer">
            <span class="mdl-layout-title">{{ config('app.name', 'Laravel') }}</span>
            <nav class="mdl-navigation">
              <a class="mdl-navigation__link" href="">Dashboard</a>
              <!--<router-link to="/" class="mdl-navigation__link">Test</router-link>-->
              <a class="mdl-navigation__link" href="">Friends</a>
              <router-link to="/items" class="mdl-navigation__link">Brews</router-link>
              <a class="mdl-navigation__link" href="/beer">Discover</a>
              <a class="mdl-navigation__link" href="">About</a>
              @if (Auth::check())
                        <a class="mdl-navigation__link" href="{{ url('/home') }}">Home</a>
                    @else
                        <a class="mdl-navigation__link" href="{{ url('/login') }}">Login</a>
                        <a class="mdl-navigation__link" href="{{ url('/register') }}">Register</a>
                    @endif
            </nav>
          </div>

          <main class="mdl-layout__content">
test
            <!--<div class="page-content">@yield('content')</div>-->
            <router-view class="view"></router-view>

          </main>

          @include('partial.footer')

        </div>



      </div>


</div>


<script>
    window.Laravel = <?php echo json_encode([
        'csrfToken' => csrf_token(),
        ]); ?>
</script>

<script src="/js/app.js"></script>
</body>
</html>
