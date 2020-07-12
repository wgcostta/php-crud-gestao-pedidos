<template>
  <div class="sidebar">
    <div class="top">
      <span>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA4VBMVEUTEVH///8AmP8QDlAAAE1XVn4AAEsAAEUAAEgAnv8Amv8AAEcAAENwb44AAEBfXoQTFVU8O2wKBk4UAEKYl6kFfNri4ekOC0/V1d4cGlUAk/8JBU7GxtMAkv/5+fsUAEYAADzm5uxqaYuurr7OztlBQHBCQWyMjKKpqLiCgZu9vcswLmJ4d5QoJ18AoP9OTXUQL3IOSpQLXrATEFgDAFTx8fYDi+/S8f/s/v/u9//G5P+h0P8Icss8qv9et/92u/8MVqUQP4QRIGONy/+y2f+p1f8ADF1Hrv8AMX8MX7AsKmCWeGUoAAAJh0lEQVR4nO2daYOiuBaGxURAQ2lJ26KthYVYWqK20zNjzVRPz9az3Nv1/3/QZQubhOBSyqmb92PY8pDknJMAh5r01lW7dgVeXYIQvgQhfAlC+BKE8PV/TGiOH5edBgxNF/bgQELT6WgaUWUMQ7KqtPGaAZlLaK80XAMmpGqdWUlCa67o167vUZLJuhSho4JrPypEVhaf0NaMa1f0BOHh3mjMEtoaunYtTxIeZlsxQ9hXYAO6iKtCQnMzunYNT1bW3KQJe+Ta9TtdiMzYhBaG3kc9yR024VtoQlfagEl4C9lRxFLXLMJB+9p1O48QZhH21GvX7UxqDxiEDbDhWkaKzSAcvo1h6A7EBYPwTfgKT/L0rRPihiCELkEIX4IQvgQhfAlC+BKE8CUI4UsQwpcghC9BCF+CEL4EIXwJQvgShPAlCOFLEMKXIIQvQQhfghC+BCF8CUL4EoTwJQjhSxDClyCEL0EIX4IQvgRhnhDSdTj8hxIa7Xvlx9GquwGDeCChsTKDzXA+bTuQUO9KgrBqEoQZCcIK6nUIkaHreN9pMopfVwcQ6hhjNSLUaE6f9E5opCrte7x56Da63R/uSbr4xS/+8V5Tk0lvjFjBRVOXdu+KLx4J676VJ9TnHVf063a70QnUSHwvbMgEPyycgRmdxfYRZQXPk8XmuLciclS1Yaxb/6q3CaFVN1CqNE8MxPKEiiPlyYpqipXNerxLb/UJ8dTZ7R0365Dg3ugPybN5WQD0p4/NSPWfgi0/t5qF+vj07mTC5FffsfqUUN3mcCy84aqZOcdJkoP1PULz3i2ZPLXqke6egy2fP9QL1Xr/2oR4mre1g9mtL/WRniX0L/vufYKwHm74hUf4ZfLKhPJN3lb/q355mU8o9b2LpAnnI5fwS4Lw13DDbxzC5reLE5pu3zQ1b5MxjAulVI/1hmmacOmebvItJvzwe7jhYzFgvfnHyYTqYuAp3GwNQjl4n3DwuO7M5/PGzSLwmorlsg3s9bThlnbWTkzpNpn+sNvtLDqEvZwxkz+aMeFfQflzq4DOJ/zESAJxgD/EqqoqNPFSr60GooYmItwtNoTIeDQaYTkMC4jtNIZEUXFQqm2igenb2lvXY2xC6pnb6safMc7d56D88x2HsP7dyd7CFzumiQi3ORnQiIKThcZ9L9zZlJG3ZoAMuR/eHxXV0Nd6jBia0r94hqbOSmp1fsJOmaQoUUoVmkIlGuW+qYndBTU0/+G0INNZXIswSt9EczVF9nbpnngSGVNqaJ6bhXwFpvRahIhGAY4SFIzm4eGOOxAnnyjQ3d9B6U+8YdhkDcNrEdaUsJuOtbCAhAPRTzFmRE0Wxmxcf19nddLrEY6Dvfs0HVU0ELc4EdV8DAu5w/BL9QmjqC/pESN/z2lCtje8JCEayUQhvhQit7OESA1H5sAlRF8DQjoMed6wVWffy0sRGgTP1/Z41h/0BzPncT3PEsbddOXG45Ogm96V9YassPtihEhZ9SwpTzEhTjqQ0JpSb8gLSlt/svN2XYTQUHr5U8QkYU0L78Gu7S1JeE7/wy9ByTOvCZ/YTXgRQh33GXwpQtJLnGHyvduId6Gv+Ic3c2LNKy5EaKAUYLo1E4TGS1jmOX0/Ni0ZsrWeipapLkBIHYO3ArVwJ1Cd6bo3ptAJwhoJdzS7uj8NLjtzan5f0IQXIIwsiORsFNWdVmEsE03bs6XJYNUN5dBtk86c/i72Fa16EeAFCKMssI/tRGfa8/h+YRjK7bzFj3dfSi5gFDfh6xMadG5rqckz5hLKdDV24Xn9f2kn5Y3C4jX0VyfEW3pEKqdtLmHsMNyrIzUcq5xOWmhITyB8zObgZRFG5Ws5WZxPGO3sjsQRXaEqtqSFvvAIwsii28qhhNMShNHc3xwaNIp75tiZ7zhpSA8lpAuD/WwSXi7hItWvGYSROXU0Okcujkmb7GnTcYQIW+H2ecZkcsfhOMXCIIyd55aerzAmbdW5j+oOfdtEobZ/1g4WtxAqJoxsqdRJduw8f+hpRAc6XZktfl7R/MQZhYcTqtEK/WxFFEVTjBdUSBhFKu5IdB2+4S0dYlXZ9PMJa0oyKa7EcYbNglnTsYTRCzXebXbs8cAak2LCRFb02XK7wfh21VlG1HuENS0VxVpPBSFb64n10PAEwv3HFwMOYfrR087a7ZKx9z4hTj3H6P233mwx1Kzz7OhRhIaReUrIJUQye/IUPBJNiyT6qTmcfP32nqFvpdLGH/7mnjyXUtoF0VjB/NDAzN8TmTlvPCAl/p+B7a2evmOIPwaPI6yp23SbyDzCmkEW+4+HXfUXw7zfE+jDaO/N6VnFj3n7EuOFtbcn7vQD5SVzR2S4zLSjOettMckHkPN96OUI3aCYPCzssSv78eYlrKUePm7Lr7Shklqn5x8ztu3edCMTwrxE9D+DhzP8JeXId4SRriqaK4XIpfuRgYl/jHuQ5xcLTq6GXcTJBr/HqIpvQUdRRTYyPEoVJET0Ic1ZmrCKhJFVfjnL/9CqR4jU0Ff0ztKEFSSkIc1OPU8NKkdojMKw9eZMb7BWjlALI/vxefpo9QhxGPWaXZm/c7kzVoxQdkxXO3Nxtv9pVY2wtglepT3fn4oqR4gSb0OfRRUjRG64y5hwZCS7O5Zq6GoRuvOy8bi34fsJQ1k7Y3urcXesGCHuBuHMlIdoGMFss0zYUyVCpFvhxVeciFSli1s3fJ9SJcLo4dr+c5+0DLpsLA34HbpKhOSRXpwT0MSVtpgfkuTsfH1CtVeWcBsR8v1KlQjjuiyLO58RLcY5/NCnSoQ1EhqQ/ohzcfrHP3POX6qqFCHCPuJsxXXlAaLVKDHDqhRhDSmb9bJb5m/uKr5ZNpQyQU21CL3P3+RyqzNIlstVsWqE55cghC9BCF+CEL4EIXwJQvgShPAlCOFLEMKXIIQvQQhfghC+BCF8CUL4EoTwJQjhSxDClyCEL0EIX4IQvhJfWqcJS31jC0HqkkF4jo8bK6H4nc4M4QJMWnmOtDGD0CnzljgAIcVkEJrK2zA1OGloUoSZjDlgpTlMwsHZvjy6pvSVySTMJAUCqkwajzShJcMfiTiT4iJNKNlnyGhwXRn0y34GobQG7jGQlv1nQZZQmoJGRNrerwD2CKV1G+5YHOX862CfULJloBYVkU1O4p8cQsmakjN9GH9JGQTnpr3NI3Rd/1rR1JGXpAuGDKy2b3u5KX8YhG6M6iwebjEQycNGj5m1iUX4diQI4UsQwpcghC9BCF+CEL7+B55/7gkTc6JWAAAAAElFTkSuQmCC"
          class="img-fluid mb-1"
        />
      </span>
    </div>

    <div slot="header" class="d-flex flex-column align-items-center mt-4">
      <div class="listgroup">
        <b-list-group>
          <b-list-group-item router-link :to="{ name: 'home' }" class="list">Inicio</b-list-group-item>
          <b-list-group-item router-link :to="{ name: 'product' }" class="list">Cadastro de Produtos</b-list-group-item>
          <b-list-group-item
            router-link
            :to="{ name: 'productslist' }"
            class="list"
          >Listagem de Produtos</b-list-group-item>
          <b-list-group-item
            router-link
            :to="{ name: 'orderslist' }"
            class="list"
          >Listagem de Pedidos</b-list-group-item>
          <b-list-group-item
            router-link
            :to="{ name: 'quotationslist' }"
            class="list"
          >Listagem de Cotações</b-list-group-item>
        </b-list-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBarComponent"
};
</script>

<style lang="scss" src="./SideBarComponent.scss" scoped />