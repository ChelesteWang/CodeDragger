function wasm_pack_install()
{
	echo "Check wasm-pack ......"
	wasm-pack --version
    if [ $? -eq  0 ]; then
        echo "wasm-pack is installed!"
    else
    	echo "Installing wasm-pack on your environment ..."
        curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
        echo "wasm-pack install finished!"
    fi
}
wasm_pack_install
wasm-pack build --target nodejs
