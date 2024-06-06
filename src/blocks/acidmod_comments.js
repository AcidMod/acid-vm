class AcidModCommentsBlocks {
    constructor (runtime){
        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.runtime = runtime;
    }

    /**
     * Retrieve the block primitives implemented by this package.
     * @return {object.<string, Function>} Mapping of opcode to Function.
     */
    getPrimitives () {
        return {
            comments_commstack: this.commstack
        };
    }

    alertBlock(args, util) {
        return('comment')
    }
}

module.exports = AcidModCommentsBlocks;