import {
  CDK_TABLE,
  CdkCell,
  CdkCellDef,
  CdkCellOutlet,
  CdkColumnDef,
  CdkFooterCell,
  CdkFooterCellDef,
  CdkFooterRow,
  CdkFooterRowDef,
  CdkHeaderCell,
  CdkHeaderCellDef,
  CdkHeaderRow,
  CdkHeaderRowDef,
  CdkNoDataRow,
  CdkRow,
  CdkRowDef,
  CdkTable,
  CdkTableModule,
  CdkTextColumn,
  DataRowOutlet,
  FooterRowOutlet,
  HeaderRowOutlet,
  NoDataRowOutlet,
  STICKY_POSITIONING_LISTENER,
  _COALESCED_STYLE_SCHEDULER,
  _CoalescedStyleScheduler
} from "./chunk-ZMZUBDUH.js";
import "./chunk-ENVV3ILY.js";
import {
  DataSource,
  _DisposeViewRepeaterStrategy,
  _RecycleViewRepeaterStrategy,
  _VIEW_REPEATER_STRATEGY
} from "./chunk-EVWSFK4K.js";
import {
  MatCommonModule
} from "./chunk-ZJ6NM76D.js";
import {
  _isNumberValue
} from "./chunk-3UH6VNBA.js";
import "./chunk-4B46MLLY.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Input,
  InputFlags,
  NgModule,
  ViewEncapsulation$1,
  booleanAttribute,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-SMH7R2AL.js";
import {
  BehaviorSubject,
  Subject,
  combineLatest,
  map,
  merge,
  of
} from "./chunk-WSA2QMXP.js";
import "./chunk-X6JV76XL.js";

// node_modules/@angular/material/fesm2022/table.mjs
var _c0 = [[["caption"]], [["colgroup"], ["col"]], "*"];
var _c1 = ["caption", "colgroup, col", "*"];
function MatTable_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 2);
  }
}
function MatTable_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "thead", 0);
    ɵɵelementContainer(1, 1);
    ɵɵelementEnd();
    ɵɵelementStart(2, "tbody", 2);
    ɵɵelementContainer(3, 3)(4, 4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "tfoot", 0);
    ɵɵelementContainer(6, 5);
    ɵɵelementEnd();
  }
}
function MatTable_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 1)(1, 3)(2, 4)(3, 5);
  }
}
function MatTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("text-align", ctx_r0.justify);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.headerText, " ");
  }
}
function MatTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("text-align", ctx_r0.justify);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.dataAccessor(data_r2, ctx_r0.name), " ");
  }
}
var _MatRecycleRows = class _MatRecycleRows {
};
_MatRecycleRows.ɵfac = function MatRecycleRows_Factory(t) {
  return new (t || _MatRecycleRows)();
};
_MatRecycleRows.ɵdir = ɵɵdefineDirective({
  type: _MatRecycleRows,
  selectors: [["mat-table", "recycleRows", ""], ["table", "mat-table", "", "recycleRows", ""]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: _VIEW_REPEATER_STRATEGY,
    useClass: _RecycleViewRepeaterStrategy
  }])]
});
var MatRecycleRows = _MatRecycleRows;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRecycleRows, [{
    type: Directive,
    args: [{
      selector: "mat-table[recycleRows], table[mat-table][recycleRows]",
      providers: [{
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _RecycleViewRepeaterStrategy
      }],
      standalone: true
    }]
  }], null, null);
})();
var _MatTable = class _MatTable extends CdkTable {
  constructor() {
    super(...arguments);
    this.stickyCssClass = "mat-mdc-table-sticky";
    this.needsPositionStickyOnElement = false;
  }
};
_MatTable.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatTable_BaseFactory;
  return function MatTable_Factory(t) {
    return (ɵMatTable_BaseFactory || (ɵMatTable_BaseFactory = ɵɵgetInheritedFactory(_MatTable)))(t || _MatTable);
  };
})();
_MatTable.ɵcmp = ɵɵdefineComponent({
  type: _MatTable,
  selectors: [["mat-table"], ["table", "mat-table", ""]],
  hostAttrs: [1, "mat-mdc-table", "mdc-data-table__table"],
  hostVars: 2,
  hostBindings: function MatTable_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("mdc-table-fixed-layout", ctx.fixedLayout);
    }
  },
  exportAs: ["matTable"],
  standalone: true,
  features: [ɵɵProvidersFeature([
    {
      provide: CdkTable,
      useExisting: _MatTable
    },
    {
      provide: CDK_TABLE,
      useExisting: _MatTable
    },
    {
      provide: _COALESCED_STYLE_SCHEDULER,
      useClass: _CoalescedStyleScheduler
    },
    // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
    //  is only included in the build if used.
    {
      provide: _VIEW_REPEATER_STRATEGY,
      useClass: _DisposeViewRepeaterStrategy
    },
    // Prevent nested tables from seeing this table's StickyPositioningListener.
    {
      provide: STICKY_POSITIONING_LISTENER,
      useValue: null
    }
  ]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 5,
  vars: 2,
  consts: [["role", "rowgroup"], ["headerRowOutlet", ""], ["role", "rowgroup", 1, "mdc-data-table__content"], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
  template: function MatTable_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c0);
      ɵɵprojection(0);
      ɵɵprojection(1, 1);
      ɵɵtemplate(2, MatTable_Conditional_2_Template, 1, 0)(3, MatTable_Conditional_3_Template, 7, 0)(4, MatTable_Conditional_4_Template, 4, 0);
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵconditional(2, ctx._isServer ? 2 : -1);
      ɵɵadvance();
      ɵɵconditional(3, ctx._isNativeHtmlTable ? 3 : 4);
    }
  },
  dependencies: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
  styles: [".mat-mdc-table-sticky{position:sticky !important}.mdc-data-table{-webkit-overflow-scrolling:touch;display:inline-flex;flex-direction:column;box-sizing:border-box;position:relative}.mdc-data-table__table-container{-webkit-overflow-scrolling:touch;overflow-x:auto;width:100%}.mdc-data-table__table{min-width:100%;border:0;white-space:nowrap;border-spacing:0;table-layout:fixed}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,.mdc-data-table__cell[dir=rtl]{text-align:right}.mdc-data-table__cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__header-cell{box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px 0 16px}.mdc-data-table__header-cell--checkbox,.mdc-data-table__cell--checkbox{padding-left:4px;padding-right:0}[dir=rtl] .mdc-data-table__header-cell--checkbox,[dir=rtl] .mdc-data-table__cell--checkbox,.mdc-data-table__header-cell--checkbox[dir=rtl],.mdc-data-table__cell--checkbox[dir=rtl]{padding-left:0;padding-right:4px}mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-mdc-table{table-layout:auto;white-space:normal;background-color:var(--mat-table-background-color)}.mat-mdc-header-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-header-container-height, 56px);color:var(--mat-table-header-headline-color, rgba(0, 0, 0, 0.87));font-family:var(--mat-table-header-headline-font, Roboto, sans-serif);line-height:var(--mat-table-header-headline-line-height);font-size:var(--mat-table-header-headline-size, 14px);font-weight:var(--mat-table-header-headline-weight, 500)}.mat-mdc-row{height:var(--mat-table-row-item-container-height, 52px);color:var(--mat-table-row-item-label-text-color, rgba(0, 0, 0, 0.87))}.mat-mdc-row,.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-table-row-item-label-text-font, Roboto, sans-serif);line-height:var(--mat-table-row-item-label-text-line-height);font-size:var(--mat-table-row-item-label-text-size, 14px);font-weight:var(--mat-table-row-item-label-text-weight)}.mat-mdc-footer-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-footer-container-height, 52px);color:var(--mat-table-row-item-label-text-color, rgba(0, 0, 0, 0.87));font-family:var(--mat-table-footer-supporting-text-font, Roboto, sans-serif);line-height:var(--mat-table-footer-supporting-text-line-height);font-size:var(--mat-table-footer-supporting-text-size, 14px);font-weight:var(--mat-table-footer-supporting-text-weight);letter-spacing:var(--mat-table-footer-supporting-text-tracking)}.mat-mdc-header-cell{border-bottom-color:var(--mat-table-row-item-outline-color, rgba(0, 0, 0, 0.12));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-header-headline-tracking);font-weight:inherit;line-height:inherit}.mat-mdc-cell{border-bottom-color:var(--mat-table-row-item-outline-color, rgba(0, 0, 0, 0.12));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-row-item-label-text-tracking);line-height:inherit}.mdc-data-table__row:last-child .mat-mdc-cell{border-bottom:none}.mat-mdc-footer-cell{letter-spacing:var(--mat-table-row-item-label-text-tracking)}mat-row.mat-mdc-row,mat-header-row.mat-mdc-header-row,mat-footer-row.mat-mdc-footer-row{border-bottom:none}.mat-mdc-table tbody,.mat-mdc-table tfoot,.mat-mdc-table thead,.mat-mdc-cell,.mat-mdc-footer-cell,.mat-mdc-header-row,.mat-mdc-row,.mat-mdc-footer-row,.mat-mdc-table .mat-mdc-header-cell{background:inherit}.mat-mdc-table mat-header-row.mat-mdc-header-row,.mat-mdc-table mat-row.mat-mdc-row,.mat-mdc-table mat-footer-row.mat-mdc-footer-cell{height:unset}mat-header-cell.mat-mdc-header-cell,mat-cell.mat-mdc-cell,mat-footer-cell.mat-mdc-footer-cell{align-self:stretch}"],
  encapsulation: 2
});
var MatTable = _MatTable;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTable, [{
    type: Component,
    args: [{
      selector: "mat-table, table[mat-table]",
      exportAs: "matTable",
      template: `
    <ng-content select="caption"/>
    <ng-content select="colgroup, col"/>

    <!--
      Unprojected content throws a hydration error so we need this to capture it.
      It gets removed on the client so it doesn't affect the layout.
    -->
    @if (_isServer) {
      <ng-content/>
    }

    @if (_isNativeHtmlTable) {
      <thead role="rowgroup">
        <ng-container headerRowOutlet/>
      </thead>
      <tbody class="mdc-data-table__content" role="rowgroup">
        <ng-container rowOutlet/>
        <ng-container noDataRowOutlet/>
      </tbody>
      <tfoot role="rowgroup">
        <ng-container footerRowOutlet/>
      </tfoot>
    } @else {
      <ng-container headerRowOutlet/>
      <ng-container rowOutlet/>
      <ng-container noDataRowOutlet/>
      <ng-container footerRowOutlet/>
    }
  `,
      host: {
        "class": "mat-mdc-table mdc-data-table__table",
        "[class.mdc-table-fixed-layout]": "fixedLayout"
      },
      providers: [
        {
          provide: CdkTable,
          useExisting: MatTable
        },
        {
          provide: CDK_TABLE,
          useExisting: MatTable
        },
        {
          provide: _COALESCED_STYLE_SCHEDULER,
          useClass: _CoalescedStyleScheduler
        },
        // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
        //  is only included in the build if used.
        {
          provide: _VIEW_REPEATER_STRATEGY,
          useClass: _DisposeViewRepeaterStrategy
        },
        // Prevent nested tables from seeing this table's StickyPositioningListener.
        {
          provide: STICKY_POSITIONING_LISTENER,
          useValue: null
        }
      ],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
      styles: [".mat-mdc-table-sticky{position:sticky !important}.mdc-data-table{-webkit-overflow-scrolling:touch;display:inline-flex;flex-direction:column;box-sizing:border-box;position:relative}.mdc-data-table__table-container{-webkit-overflow-scrolling:touch;overflow-x:auto;width:100%}.mdc-data-table__table{min-width:100%;border:0;white-space:nowrap;border-spacing:0;table-layout:fixed}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,.mdc-data-table__cell[dir=rtl]{text-align:right}.mdc-data-table__cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__header-cell{box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px 0 16px}.mdc-data-table__header-cell--checkbox,.mdc-data-table__cell--checkbox{padding-left:4px;padding-right:0}[dir=rtl] .mdc-data-table__header-cell--checkbox,[dir=rtl] .mdc-data-table__cell--checkbox,.mdc-data-table__header-cell--checkbox[dir=rtl],.mdc-data-table__cell--checkbox[dir=rtl]{padding-left:0;padding-right:4px}mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-mdc-table{table-layout:auto;white-space:normal;background-color:var(--mat-table-background-color)}.mat-mdc-header-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-header-container-height, 56px);color:var(--mat-table-header-headline-color, rgba(0, 0, 0, 0.87));font-family:var(--mat-table-header-headline-font, Roboto, sans-serif);line-height:var(--mat-table-header-headline-line-height);font-size:var(--mat-table-header-headline-size, 14px);font-weight:var(--mat-table-header-headline-weight, 500)}.mat-mdc-row{height:var(--mat-table-row-item-container-height, 52px);color:var(--mat-table-row-item-label-text-color, rgba(0, 0, 0, 0.87))}.mat-mdc-row,.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-table-row-item-label-text-font, Roboto, sans-serif);line-height:var(--mat-table-row-item-label-text-line-height);font-size:var(--mat-table-row-item-label-text-size, 14px);font-weight:var(--mat-table-row-item-label-text-weight)}.mat-mdc-footer-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-footer-container-height, 52px);color:var(--mat-table-row-item-label-text-color, rgba(0, 0, 0, 0.87));font-family:var(--mat-table-footer-supporting-text-font, Roboto, sans-serif);line-height:var(--mat-table-footer-supporting-text-line-height);font-size:var(--mat-table-footer-supporting-text-size, 14px);font-weight:var(--mat-table-footer-supporting-text-weight);letter-spacing:var(--mat-table-footer-supporting-text-tracking)}.mat-mdc-header-cell{border-bottom-color:var(--mat-table-row-item-outline-color, rgba(0, 0, 0, 0.12));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-header-headline-tracking);font-weight:inherit;line-height:inherit}.mat-mdc-cell{border-bottom-color:var(--mat-table-row-item-outline-color, rgba(0, 0, 0, 0.12));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-row-item-label-text-tracking);line-height:inherit}.mdc-data-table__row:last-child .mat-mdc-cell{border-bottom:none}.mat-mdc-footer-cell{letter-spacing:var(--mat-table-row-item-label-text-tracking)}mat-row.mat-mdc-row,mat-header-row.mat-mdc-header-row,mat-footer-row.mat-mdc-footer-row{border-bottom:none}.mat-mdc-table tbody,.mat-mdc-table tfoot,.mat-mdc-table thead,.mat-mdc-cell,.mat-mdc-footer-cell,.mat-mdc-header-row,.mat-mdc-row,.mat-mdc-footer-row,.mat-mdc-table .mat-mdc-header-cell{background:inherit}.mat-mdc-table mat-header-row.mat-mdc-header-row,.mat-mdc-table mat-row.mat-mdc-row,.mat-mdc-table mat-footer-row.mat-mdc-footer-cell{height:unset}mat-header-cell.mat-mdc-header-cell,mat-cell.mat-mdc-cell,mat-footer-cell.mat-mdc-footer-cell{align-self:stretch}"]
    }]
  }], null, null);
})();
var _MatCellDef = class _MatCellDef extends CdkCellDef {
};
_MatCellDef.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatCellDef_BaseFactory;
  return function MatCellDef_Factory(t) {
    return (ɵMatCellDef_BaseFactory || (ɵMatCellDef_BaseFactory = ɵɵgetInheritedFactory(_MatCellDef)))(t || _MatCellDef);
  };
})();
_MatCellDef.ɵdir = ɵɵdefineDirective({
  type: _MatCellDef,
  selectors: [["", "matCellDef", ""]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CdkCellDef,
    useExisting: _MatCellDef
  }]), ɵɵInheritDefinitionFeature]
});
var MatCellDef = _MatCellDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCellDef, [{
    type: Directive,
    args: [{
      selector: "[matCellDef]",
      providers: [{
        provide: CdkCellDef,
        useExisting: MatCellDef
      }],
      standalone: true
    }]
  }], null, null);
})();
var _MatHeaderCellDef = class _MatHeaderCellDef extends CdkHeaderCellDef {
};
_MatHeaderCellDef.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatHeaderCellDef_BaseFactory;
  return function MatHeaderCellDef_Factory(t) {
    return (ɵMatHeaderCellDef_BaseFactory || (ɵMatHeaderCellDef_BaseFactory = ɵɵgetInheritedFactory(_MatHeaderCellDef)))(t || _MatHeaderCellDef);
  };
})();
_MatHeaderCellDef.ɵdir = ɵɵdefineDirective({
  type: _MatHeaderCellDef,
  selectors: [["", "matHeaderCellDef", ""]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CdkHeaderCellDef,
    useExisting: _MatHeaderCellDef
  }]), ɵɵInheritDefinitionFeature]
});
var MatHeaderCellDef = _MatHeaderCellDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderCellDef, [{
    type: Directive,
    args: [{
      selector: "[matHeaderCellDef]",
      providers: [{
        provide: CdkHeaderCellDef,
        useExisting: MatHeaderCellDef
      }],
      standalone: true
    }]
  }], null, null);
})();
var _MatFooterCellDef = class _MatFooterCellDef extends CdkFooterCellDef {
};
_MatFooterCellDef.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatFooterCellDef_BaseFactory;
  return function MatFooterCellDef_Factory(t) {
    return (ɵMatFooterCellDef_BaseFactory || (ɵMatFooterCellDef_BaseFactory = ɵɵgetInheritedFactory(_MatFooterCellDef)))(t || _MatFooterCellDef);
  };
})();
_MatFooterCellDef.ɵdir = ɵɵdefineDirective({
  type: _MatFooterCellDef,
  selectors: [["", "matFooterCellDef", ""]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CdkFooterCellDef,
    useExisting: _MatFooterCellDef
  }]), ɵɵInheritDefinitionFeature]
});
var MatFooterCellDef = _MatFooterCellDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterCellDef, [{
    type: Directive,
    args: [{
      selector: "[matFooterCellDef]",
      providers: [{
        provide: CdkFooterCellDef,
        useExisting: MatFooterCellDef
      }],
      standalone: true
    }]
  }], null, null);
})();
var _MatColumnDef = class _MatColumnDef extends CdkColumnDef {
  /** Unique name for this column. */
  get name() {
    return this._name;
  }
  set name(name) {
    this._setNameInput(name);
  }
  /**
   * Add "mat-column-" prefix in addition to "cdk-column-" prefix.
   * In the future, this will only add "mat-column-" and columnCssClassName
   * will change from type string[] to string.
   * @docs-private
   */
  _updateColumnCssClassName() {
    super._updateColumnCssClassName();
    this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`);
  }
};
_MatColumnDef.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatColumnDef_BaseFactory;
  return function MatColumnDef_Factory(t) {
    return (ɵMatColumnDef_BaseFactory || (ɵMatColumnDef_BaseFactory = ɵɵgetInheritedFactory(_MatColumnDef)))(t || _MatColumnDef);
  };
})();
_MatColumnDef.ɵdir = ɵɵdefineDirective({
  type: _MatColumnDef,
  selectors: [["", "matColumnDef", ""]],
  inputs: {
    name: [InputFlags.None, "matColumnDef", "name"]
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CdkColumnDef,
    useExisting: _MatColumnDef
  }, {
    provide: "MAT_SORT_HEADER_COLUMN_DEF",
    useExisting: _MatColumnDef
  }]), ɵɵInheritDefinitionFeature]
});
var MatColumnDef = _MatColumnDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatColumnDef, [{
    type: Directive,
    args: [{
      selector: "[matColumnDef]",
      providers: [{
        provide: CdkColumnDef,
        useExisting: MatColumnDef
      }, {
        provide: "MAT_SORT_HEADER_COLUMN_DEF",
        useExisting: MatColumnDef
      }],
      standalone: true
    }]
  }], null, {
    name: [{
      type: Input,
      args: ["matColumnDef"]
    }]
  });
})();
var _MatHeaderCell = class _MatHeaderCell extends CdkHeaderCell {
};
_MatHeaderCell.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatHeaderCell_BaseFactory;
  return function MatHeaderCell_Factory(t) {
    return (ɵMatHeaderCell_BaseFactory || (ɵMatHeaderCell_BaseFactory = ɵɵgetInheritedFactory(_MatHeaderCell)))(t || _MatHeaderCell);
  };
})();
_MatHeaderCell.ɵdir = ɵɵdefineDirective({
  type: _MatHeaderCell,
  selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]],
  hostAttrs: ["role", "columnheader", 1, "mat-mdc-header-cell", "mdc-data-table__header-cell"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature]
});
var MatHeaderCell = _MatHeaderCell;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderCell, [{
    type: Directive,
    args: [{
      selector: "mat-header-cell, th[mat-header-cell]",
      host: {
        "class": "mat-mdc-header-cell mdc-data-table__header-cell",
        "role": "columnheader"
      },
      standalone: true
    }]
  }], null, null);
})();
var _MatFooterCell = class _MatFooterCell extends CdkFooterCell {
};
_MatFooterCell.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatFooterCell_BaseFactory;
  return function MatFooterCell_Factory(t) {
    return (ɵMatFooterCell_BaseFactory || (ɵMatFooterCell_BaseFactory = ɵɵgetInheritedFactory(_MatFooterCell)))(t || _MatFooterCell);
  };
})();
_MatFooterCell.ɵdir = ɵɵdefineDirective({
  type: _MatFooterCell,
  selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]],
  hostAttrs: [1, "mat-mdc-footer-cell", "mdc-data-table__cell"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature]
});
var MatFooterCell = _MatFooterCell;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterCell, [{
    type: Directive,
    args: [{
      selector: "mat-footer-cell, td[mat-footer-cell]",
      host: {
        "class": "mat-mdc-footer-cell mdc-data-table__cell"
      },
      standalone: true
    }]
  }], null, null);
})();
var _MatCell = class _MatCell extends CdkCell {
};
_MatCell.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatCell_BaseFactory;
  return function MatCell_Factory(t) {
    return (ɵMatCell_BaseFactory || (ɵMatCell_BaseFactory = ɵɵgetInheritedFactory(_MatCell)))(t || _MatCell);
  };
})();
_MatCell.ɵdir = ɵɵdefineDirective({
  type: _MatCell,
  selectors: [["mat-cell"], ["td", "mat-cell", ""]],
  hostAttrs: [1, "mat-mdc-cell", "mdc-data-table__cell"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature]
});
var MatCell = _MatCell;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCell, [{
    type: Directive,
    args: [{
      selector: "mat-cell, td[mat-cell]",
      host: {
        "class": "mat-mdc-cell mdc-data-table__cell"
      },
      standalone: true
    }]
  }], null, null);
})();
var ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
var _MatHeaderRowDef = class _MatHeaderRowDef extends CdkHeaderRowDef {
};
_MatHeaderRowDef.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatHeaderRowDef_BaseFactory;
  return function MatHeaderRowDef_Factory(t) {
    return (ɵMatHeaderRowDef_BaseFactory || (ɵMatHeaderRowDef_BaseFactory = ɵɵgetInheritedFactory(_MatHeaderRowDef)))(t || _MatHeaderRowDef);
  };
})();
_MatHeaderRowDef.ɵdir = ɵɵdefineDirective({
  type: _MatHeaderRowDef,
  selectors: [["", "matHeaderRowDef", ""]],
  inputs: {
    columns: [InputFlags.None, "matHeaderRowDef", "columns"],
    sticky: [InputFlags.HasDecoratorInputTransform, "matHeaderRowDefSticky", "sticky", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CdkHeaderRowDef,
    useExisting: _MatHeaderRowDef
  }]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature]
});
var MatHeaderRowDef = _MatHeaderRowDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderRowDef, [{
    type: Directive,
    args: [{
      selector: "[matHeaderRowDef]",
      providers: [{
        provide: CdkHeaderRowDef,
        useExisting: MatHeaderRowDef
      }],
      inputs: [{
        name: "columns",
        alias: "matHeaderRowDef"
      }, {
        name: "sticky",
        alias: "matHeaderRowDefSticky",
        transform: booleanAttribute
      }],
      standalone: true
    }]
  }], null, null);
})();
var _MatFooterRowDef = class _MatFooterRowDef extends CdkFooterRowDef {
};
_MatFooterRowDef.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatFooterRowDef_BaseFactory;
  return function MatFooterRowDef_Factory(t) {
    return (ɵMatFooterRowDef_BaseFactory || (ɵMatFooterRowDef_BaseFactory = ɵɵgetInheritedFactory(_MatFooterRowDef)))(t || _MatFooterRowDef);
  };
})();
_MatFooterRowDef.ɵdir = ɵɵdefineDirective({
  type: _MatFooterRowDef,
  selectors: [["", "matFooterRowDef", ""]],
  inputs: {
    columns: [InputFlags.None, "matFooterRowDef", "columns"],
    sticky: [InputFlags.HasDecoratorInputTransform, "matFooterRowDefSticky", "sticky", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CdkFooterRowDef,
    useExisting: _MatFooterRowDef
  }]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature]
});
var MatFooterRowDef = _MatFooterRowDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterRowDef, [{
    type: Directive,
    args: [{
      selector: "[matFooterRowDef]",
      providers: [{
        provide: CdkFooterRowDef,
        useExisting: MatFooterRowDef
      }],
      inputs: [{
        name: "columns",
        alias: "matFooterRowDef"
      }, {
        name: "sticky",
        alias: "matFooterRowDefSticky",
        transform: booleanAttribute
      }],
      standalone: true
    }]
  }], null, null);
})();
var _MatRowDef = class _MatRowDef extends CdkRowDef {
};
_MatRowDef.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatRowDef_BaseFactory;
  return function MatRowDef_Factory(t) {
    return (ɵMatRowDef_BaseFactory || (ɵMatRowDef_BaseFactory = ɵɵgetInheritedFactory(_MatRowDef)))(t || _MatRowDef);
  };
})();
_MatRowDef.ɵdir = ɵɵdefineDirective({
  type: _MatRowDef,
  selectors: [["", "matRowDef", ""]],
  inputs: {
    columns: [InputFlags.None, "matRowDefColumns", "columns"],
    when: [InputFlags.None, "matRowDefWhen", "when"]
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CdkRowDef,
    useExisting: _MatRowDef
  }]), ɵɵInheritDefinitionFeature]
});
var MatRowDef = _MatRowDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRowDef, [{
    type: Directive,
    args: [{
      selector: "[matRowDef]",
      providers: [{
        provide: CdkRowDef,
        useExisting: MatRowDef
      }],
      inputs: [{
        name: "columns",
        alias: "matRowDefColumns"
      }, {
        name: "when",
        alias: "matRowDefWhen"
      }],
      standalone: true
    }]
  }], null, null);
})();
var _MatHeaderRow = class _MatHeaderRow extends CdkHeaderRow {
};
_MatHeaderRow.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatHeaderRow_BaseFactory;
  return function MatHeaderRow_Factory(t) {
    return (ɵMatHeaderRow_BaseFactory || (ɵMatHeaderRow_BaseFactory = ɵɵgetInheritedFactory(_MatHeaderRow)))(t || _MatHeaderRow);
  };
})();
_MatHeaderRow.ɵcmp = ɵɵdefineComponent({
  type: _MatHeaderRow,
  selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]],
  hostAttrs: ["role", "row", 1, "mat-mdc-header-row", "mdc-data-table__header-row"],
  exportAs: ["matHeaderRow"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CdkHeaderRow,
    useExisting: _MatHeaderRow
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function MatHeaderRow_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainer(0, 0);
    }
  },
  dependencies: [CdkCellOutlet],
  encapsulation: 2
});
var MatHeaderRow = _MatHeaderRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderRow, [{
    type: Component,
    args: [{
      selector: "mat-header-row, tr[mat-header-row]",
      template: ROW_TEMPLATE,
      host: {
        "class": "mat-mdc-header-row mdc-data-table__header-row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      exportAs: "matHeaderRow",
      providers: [{
        provide: CdkHeaderRow,
        useExisting: MatHeaderRow
      }],
      standalone: true,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var _MatFooterRow = class _MatFooterRow extends CdkFooterRow {
};
_MatFooterRow.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatFooterRow_BaseFactory;
  return function MatFooterRow_Factory(t) {
    return (ɵMatFooterRow_BaseFactory || (ɵMatFooterRow_BaseFactory = ɵɵgetInheritedFactory(_MatFooterRow)))(t || _MatFooterRow);
  };
})();
_MatFooterRow.ɵcmp = ɵɵdefineComponent({
  type: _MatFooterRow,
  selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]],
  hostAttrs: ["role", "row", 1, "mat-mdc-footer-row", "mdc-data-table__row"],
  exportAs: ["matFooterRow"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CdkFooterRow,
    useExisting: _MatFooterRow
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function MatFooterRow_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainer(0, 0);
    }
  },
  dependencies: [CdkCellOutlet],
  encapsulation: 2
});
var MatFooterRow = _MatFooterRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterRow, [{
    type: Component,
    args: [{
      selector: "mat-footer-row, tr[mat-footer-row]",
      template: ROW_TEMPLATE,
      host: {
        "class": "mat-mdc-footer-row mdc-data-table__row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      exportAs: "matFooterRow",
      providers: [{
        provide: CdkFooterRow,
        useExisting: MatFooterRow
      }],
      standalone: true,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var _MatRow = class _MatRow extends CdkRow {
};
_MatRow.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatRow_BaseFactory;
  return function MatRow_Factory(t) {
    return (ɵMatRow_BaseFactory || (ɵMatRow_BaseFactory = ɵɵgetInheritedFactory(_MatRow)))(t || _MatRow);
  };
})();
_MatRow.ɵcmp = ɵɵdefineComponent({
  type: _MatRow,
  selectors: [["mat-row"], ["tr", "mat-row", ""]],
  hostAttrs: ["role", "row", 1, "mat-mdc-row", "mdc-data-table__row"],
  exportAs: ["matRow"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CdkRow,
    useExisting: _MatRow
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function MatRow_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainer(0, 0);
    }
  },
  dependencies: [CdkCellOutlet],
  encapsulation: 2
});
var MatRow = _MatRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRow, [{
    type: Component,
    args: [{
      selector: "mat-row, tr[mat-row]",
      template: ROW_TEMPLATE,
      host: {
        "class": "mat-mdc-row mdc-data-table__row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      exportAs: "matRow",
      providers: [{
        provide: CdkRow,
        useExisting: MatRow
      }],
      standalone: true,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var _MatNoDataRow = class _MatNoDataRow extends CdkNoDataRow {
  constructor() {
    super(...arguments);
    this._contentClassName = "mat-mdc-no-data-row";
  }
};
_MatNoDataRow.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatNoDataRow_BaseFactory;
  return function MatNoDataRow_Factory(t) {
    return (ɵMatNoDataRow_BaseFactory || (ɵMatNoDataRow_BaseFactory = ɵɵgetInheritedFactory(_MatNoDataRow)))(t || _MatNoDataRow);
  };
})();
_MatNoDataRow.ɵdir = ɵɵdefineDirective({
  type: _MatNoDataRow,
  selectors: [["ng-template", "matNoDataRow", ""]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CdkNoDataRow,
    useExisting: _MatNoDataRow
  }]), ɵɵInheritDefinitionFeature]
});
var MatNoDataRow = _MatNoDataRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatNoDataRow, [{
    type: Directive,
    args: [{
      selector: "ng-template[matNoDataRow]",
      providers: [{
        provide: CdkNoDataRow,
        useExisting: MatNoDataRow
      }],
      standalone: true
    }]
  }], null, null);
})();
var _MatTextColumn = class _MatTextColumn extends CdkTextColumn {
};
_MatTextColumn.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatTextColumn_BaseFactory;
  return function MatTextColumn_Factory(t) {
    return (ɵMatTextColumn_BaseFactory || (ɵMatTextColumn_BaseFactory = ɵɵgetInheritedFactory(_MatTextColumn)))(t || _MatTextColumn);
  };
})();
_MatTextColumn.ɵcmp = ɵɵdefineComponent({
  type: _MatTextColumn,
  selectors: [["mat-text-column"]],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 3,
  vars: 0,
  consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]],
  template: function MatTextColumn_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainerStart(0, 0);
      ɵɵtemplate(1, MatTextColumn_th_1_Template, 2, 3, "th", 1)(2, MatTextColumn_td_2_Template, 2, 3, "td", 2);
      ɵɵelementContainerEnd();
    }
  },
  dependencies: [MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell],
  encapsulation: 2
});
var MatTextColumn = _MatTextColumn;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTextColumn, [{
    type: Component,
    args: [{
      selector: "mat-text-column",
      template: `
    <ng-container matColumnDef>
      <th mat-header-cell *matHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td mat-cell *matCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
      encapsulation: ViewEncapsulation$1.None,
      // Change detection is intentionally not set to OnPush. This component's template will be provided
      // to the table to be inserted into its view. This is problematic when change detection runs since
      // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
      // mean's the template in the table's view will not have the updated value (and in fact will cause
      // an ExpressionChangedAfterItHasBeenCheckedError).
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell]
    }]
  }], null, null);
})();
var EXPORTED_DECLARATIONS = [
  // Table
  MatTable,
  MatRecycleRows,
  // Template defs
  MatHeaderCellDef,
  MatHeaderRowDef,
  MatColumnDef,
  MatCellDef,
  MatRowDef,
  MatFooterCellDef,
  MatFooterRowDef,
  // Cell directives
  MatHeaderCell,
  MatCell,
  MatFooterCell,
  // Row directives
  MatHeaderRow,
  MatRow,
  MatFooterRow,
  MatNoDataRow,
  MatTextColumn
];
var _MatTableModule = class _MatTableModule {
};
_MatTableModule.ɵfac = function MatTableModule_Factory(t) {
  return new (t || _MatTableModule)();
};
_MatTableModule.ɵmod = ɵɵdefineNgModule({
  type: _MatTableModule,
  imports: [
    MatCommonModule,
    CdkTableModule,
    // Table
    MatTable,
    MatRecycleRows,
    // Template defs
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatColumnDef,
    MatCellDef,
    MatRowDef,
    MatFooterCellDef,
    MatFooterRowDef,
    // Cell directives
    MatHeaderCell,
    MatCell,
    MatFooterCell,
    // Row directives
    MatHeaderRow,
    MatRow,
    MatFooterRow,
    MatNoDataRow,
    MatTextColumn
  ],
  exports: [
    MatCommonModule,
    // Table
    MatTable,
    MatRecycleRows,
    // Template defs
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatColumnDef,
    MatCellDef,
    MatRowDef,
    MatFooterCellDef,
    MatFooterRowDef,
    // Cell directives
    MatHeaderCell,
    MatCell,
    MatFooterCell,
    // Row directives
    MatHeaderRow,
    MatRow,
    MatFooterRow,
    MatNoDataRow,
    MatTextColumn
  ]
});
_MatTableModule.ɵinj = ɵɵdefineInjector({
  imports: [MatCommonModule, CdkTableModule, MatCommonModule]
});
var MatTableModule = _MatTableModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTableModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, CdkTableModule, ...EXPORTED_DECLARATIONS],
      exports: [MatCommonModule, EXPORTED_DECLARATIONS]
    }]
  }], null, null);
})();
var MAX_SAFE_INTEGER = 9007199254740991;
var MatTableDataSource = class extends DataSource {
  /** Array of data that should be rendered by the table, where each object represents one row. */
  get data() {
    return this._data.value;
  }
  set data(data) {
    data = Array.isArray(data) ? data : [];
    this._data.next(data);
    if (!this._renderChangesSubscription) {
      this._filterData(data);
    }
  }
  /**
   * Filter term that should be used to filter out objects from the data array. To override how
   * data objects match to this filter string, provide a custom function for filterPredicate.
   */
  get filter() {
    return this._filter.value;
  }
  set filter(filter) {
    this._filter.next(filter);
    if (!this._renderChangesSubscription) {
      this._filterData(this.data);
    }
  }
  /**
   * Instance of the MatSort directive used by the table to control its sorting. Sort changes
   * emitted by the MatSort will trigger an update to the table's rendered data.
   */
  get sort() {
    return this._sort;
  }
  set sort(sort) {
    this._sort = sort;
    this._updateChangeSubscription();
  }
  /**
   * Instance of the paginator component used by the table to control what page of the data is
   * displayed. Page changes emitted by the paginator will trigger an update to the
   * table's rendered data.
   *
   * Note that the data source uses the paginator's properties to calculate which page of data
   * should be displayed. If the paginator receives its properties as template inputs,
   * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
   * initialized before assigning it to this data source.
   */
  get paginator() {
    return this._paginator;
  }
  set paginator(paginator) {
    this._paginator = paginator;
    this._updateChangeSubscription();
  }
  constructor(initialData = []) {
    super();
    this._renderData = new BehaviorSubject([]);
    this._filter = new BehaviorSubject("");
    this._internalPageChanges = new Subject();
    this._renderChangesSubscription = null;
    this.sortingDataAccessor = (data, sortHeaderId) => {
      const value = data[sortHeaderId];
      if (_isNumberValue(value)) {
        const numberValue = Number(value);
        return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
      }
      return value;
    };
    this.sortData = (data, sort) => {
      const active = sort.active;
      const direction = sort.direction;
      if (!active || direction == "") {
        return data;
      }
      return data.sort((a, b) => {
        let valueA = this.sortingDataAccessor(a, active);
        let valueB = this.sortingDataAccessor(b, active);
        const valueAType = typeof valueA;
        const valueBType = typeof valueB;
        if (valueAType !== valueBType) {
          if (valueAType === "number") {
            valueA += "";
          }
          if (valueBType === "number") {
            valueB += "";
          }
        }
        let comparatorResult = 0;
        if (valueA != null && valueB != null) {
          if (valueA > valueB) {
            comparatorResult = 1;
          } else if (valueA < valueB) {
            comparatorResult = -1;
          }
        } else if (valueA != null) {
          comparatorResult = 1;
        } else if (valueB != null) {
          comparatorResult = -1;
        }
        return comparatorResult * (direction == "asc" ? 1 : -1);
      });
    };
    this.filterPredicate = (data, filter) => {
      const dataStr = Object.keys(data).reduce((currentTerm, key) => {
        return currentTerm + data[key] + "◬";
      }, "").toLowerCase();
      const transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) != -1;
    };
    this._data = new BehaviorSubject(initialData);
    this._updateChangeSubscription();
  }
  /**
   * Subscribe to changes that should trigger an update to the table's rendered rows. When the
   * changes occur, process the current state of the filter, sort, and pagination along with
   * the provided base data and send it to the table for rendering.
   */
  _updateChangeSubscription() {
    const sortChange = this._sort ? merge(this._sort.sortChange, this._sort.initialized) : of(null);
    const pageChange = this._paginator ? merge(this._paginator.page, this._internalPageChanges, this._paginator.initialized) : of(null);
    const dataStream = this._data;
    const filteredData = combineLatest([dataStream, this._filter]).pipe(map(([data]) => this._filterData(data)));
    const orderedData = combineLatest([filteredData, sortChange]).pipe(map(([data]) => this._orderData(data)));
    const paginatedData = combineLatest([orderedData, pageChange]).pipe(map(([data]) => this._pageData(data)));
    this._renderChangesSubscription?.unsubscribe();
    this._renderChangesSubscription = paginatedData.subscribe((data) => this._renderData.next(data));
  }
  /**
   * Returns a filtered data array where each filter object contains the filter string within
   * the result of the filterPredicate function. If no filter is set, returns the data array
   * as provided.
   */
  _filterData(data) {
    this.filteredData = this.filter == null || this.filter === "" ? data : data.filter((obj) => this.filterPredicate(obj, this.filter));
    if (this.paginator) {
      this._updatePaginator(this.filteredData.length);
    }
    return this.filteredData;
  }
  /**
   * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
   * data array as provided. Uses the default data accessor for data lookup, unless a
   * sortDataAccessor function is defined.
   */
  _orderData(data) {
    if (!this.sort) {
      return data;
    }
    return this.sortData(data.slice(), this.sort);
  }
  /**
   * Returns a paged slice of the provided data array according to the provided paginator's page
   * index and length. If there is no paginator provided, returns the data array as provided.
   */
  _pageData(data) {
    if (!this.paginator) {
      return data;
    }
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.slice(startIndex, startIndex + this.paginator.pageSize);
  }
  /**
   * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
   * index does not exceed the paginator's last page. Values are changed in a resolved promise to
   * guard against making property changes within a round of change detection.
   */
  _updatePaginator(filteredDataLength) {
    Promise.resolve().then(() => {
      const paginator = this.paginator;
      if (!paginator) {
        return;
      }
      paginator.length = filteredDataLength;
      if (paginator.pageIndex > 0) {
        const lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
        const newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);
        if (newPageIndex !== paginator.pageIndex) {
          paginator.pageIndex = newPageIndex;
          this._internalPageChanges.next();
        }
      }
    });
  }
  /**
   * Used by the MatTable. Called when it connects to the data source.
   * @docs-private
   */
  connect() {
    if (!this._renderChangesSubscription) {
      this._updateChangeSubscription();
    }
    return this._renderData;
  }
  /**
   * Used by the MatTable. Called when it disconnects from the data source.
   * @docs-private
   */
  disconnect() {
    this._renderChangesSubscription?.unsubscribe();
    this._renderChangesSubscription = null;
  }
};
export {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatFooterCell,
  MatFooterCellDef,
  MatFooterRow,
  MatFooterRowDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRecycleRows,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule,
  MatTextColumn
};
//# sourceMappingURL=@angular_material_table.js.map
