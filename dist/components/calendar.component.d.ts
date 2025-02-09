import { OnInit, EventEmitter, Provider } from '@angular/core';
import { CalendarMonth, CalendarModalOptions, CalendarComponentOptions, CalendarDay, CalendarComponentPayloadTypes, CalendarComponentMonthChange, CalendarComponentTypeProperty } from '../calendar.model';
import { CalendarService } from '../services/calendar.service';
import { ControlValueAccessor } from '@angular/forms';
export declare const ION_CAL_VALUE_ACCESSOR: Provider;
export declare class CalendarComponent implements ControlValueAccessor, OnInit {
    calSvc: CalendarService;
    _d: CalendarModalOptions;
    _options: CalendarComponentOptions;
    _view: 'month' | 'days';
    _calendarMonthValue: CalendarDay[];
    _showToggleButtons: boolean;
    showToggleButtons: boolean;
    _showMonthPicker: boolean;
    showMonthPicker: boolean;
    monthOpt: CalendarMonth;
    format: string;
    type: CalendarComponentTypeProperty;
    readonly: boolean;
    change: EventEmitter<CalendarComponentPayloadTypes>;
    monthChange: EventEmitter<CalendarComponentMonthChange>;
    select: EventEmitter<CalendarDay>;
    selectStart: EventEmitter<CalendarDay>;
    selectEnd: EventEmitter<CalendarDay>;
    options: CalendarComponentOptions;
    readonly MONTH_DATE_FORMAT = "MMMM yyyy";
    constructor(calSvc: CalendarService);
    ngOnInit(): void;
    getViewDate(): CalendarComponentPayloadTypes;
    getDate(date: number): Date;
    setViewDate(value: CalendarComponentPayloadTypes): void;
    switchView(): void;
    prev(): void;
    next(): void;
    prevYear(): void;
    nextYear(): void;
    nextMonth(): void;
    canNext(): boolean;
    backMonth(): void;
    canBack(): boolean;
    monthOnSelect(month: number): void;
    onChanged($event: CalendarDay[]): void;
    swipeEvent($event: any): void;
    _onChanged: Function;
    _onTouched: Function;
    _payloadToTimeNumber(value: CalendarComponentPayloadTypes): number;
    _monthFormat(date: number): string;
    private initOpt;
    createMonth(date: number): CalendarMonth;
    _createCalendarDay(value: CalendarComponentPayloadTypes): CalendarDay;
    _handleType(value: number): CalendarComponentPayloadTypes;
    writeValue(obj: any): void;
    registerOnChange(fn: () => {}): void;
    registerOnTouched(fn: () => {}): void;
    _writeValue(value: any): void;
}
