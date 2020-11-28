import { __decorate, __metadata } from "tslib";
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Inject } from 'vue-typedi';
import TextService from '@/Scandinaver/Translate/Application/text.service';
import { Translate } from '@/Scandinaver/Translate/Domain/Translate';
let ImageComponent = class ImageComponent extends Vue {
    constructor() {
        super(...arguments);
        this.imageSrc = '';
        this.fileUploadFormData = new FormData();
    }
    previewThumbnail(event) {
        const input = event.target;
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            this.fileUploadFormData.append('file', input.files[0]);
            const vm = this;
            reader.onload = function (e) {
                vm.item.image = e.target.result;
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    async upload() {
        await this.service.saveImage(this.item, this.fileUploadFormData);
        this.$buefy.snackbar.open('Обновлено!');
    }
};
__decorate([
    Prop({ required: true }),
    __metadata("design:type", Translate)
], ImageComponent.prototype, "item", void 0);
__decorate([
    Inject(),
    __metadata("design:type", TextService)
], ImageComponent.prototype, "service", void 0);
ImageComponent = __decorate([
    Component({
        components: {},
    })
], ImageComponent);
export default ImageComponent;
//# sourceMappingURL=image.component.js.map