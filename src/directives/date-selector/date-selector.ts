import { Directive, Input, ElementRef, Renderer } from "@angular/core";
import moment from 'moment';

interface DateSelectorInterface {
    getId(): moment.MomentInput;
}

@Directive({ selector: '[datespan]' })
export class DateSelectorDirective implements DateSelectorInterface {
    @Input('datespan') id: moment.MomentInput;
    constructor(public elemRef: ElementRef, public renderer: Renderer) { }

    getId() : moment.MomentInput {
        return this.id;
    }

    setInRange(rangeType) {
        let rangeClass = 'in-range-' + rangeType;
        this.renderer.setElementClass(this.elemRef.nativeElement.parentElement, rangeClass, true);
    }

    setToday() {
        this.renderer.setElementClass(this.elemRef.nativeElement, 'today', true);
    }

    setSelected() {
        this.renderer.setElementClass(this.elemRef.nativeElement, 'selected', true);
    }

    unsetSelected() {
        this.renderer.setElementClass(this.elemRef.nativeElement, 'selected', false);
    }

    setDisabled() {
        this.renderer.setElementClass(this.elemRef.nativeElement.parentElement, 'in-range-full', false);
        this.renderer.setElementClass(this.elemRef.nativeElement.parentElement, 'in-range-left', false);
        this.renderer.setElementClass(this.elemRef.nativeElement.parentElement, 'in-range-right', false);
        this.renderer.setElementProperty(this.elemRef.nativeElement, 'disabled', true);
    }

    setEnabled() {
        this.renderer.setElementClass(this.elemRef.nativeElement.parentElement, 'in-range-full', false);
        this.renderer.setElementClass(this.elemRef.nativeElement.parentElement, 'in-range-left', false);
        this.renderer.setElementClass(this.elemRef.nativeElement.parentElement, 'in-range-right', false);
        this.renderer.setElementProperty(this.elemRef.nativeElement, 'disabled', false);
    }
}