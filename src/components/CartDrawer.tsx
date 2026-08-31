'use client';

import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShieldCheck, Zap, ArrowRight, Ticket, Check } from 'lucide-react';
import { CartItem, LocationInfo } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  location: LocationInfo;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  location,
  onCheckout,
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponSuccess, setCouponSuccess] = useState(false);

  if (!isOpen) return null;

  const itemSubtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const totalGst = Math.round(itemSubtotal * 0.18);
  const deliveryFee = itemSubtotal > 2000 || itemSubtotal === 0 ? 0 : 99;
  const finalTotal = Math.max(0, itemSubtotal + totalGst + deliveryFee - appliedDiscount);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'MIDC500' && itemSubtotal > 1500) {
      setAppliedDiscount(500);
      setCouponSuccess(true);
    } else if (couponCode.trim().toUpperCase() === 'BLINKIT10' && itemSubtotal > 500) {
      setAppliedDiscount(Math.round(itemSubtotal * 0.10));
      setCouponSuccess(true);
    } else {
      alert('Invalid coupon. Try "MIDC500" for ₹500 off on orders over ₹1500!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop overlay */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white text-slate-900 shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-4 bg-[#0F172A] text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-sm">
                ⚡
              </div>
              <div>
                <h3 className="font-extrabold text-base leading-tight">Your Cart Preview</h3>
                <p className="text-[11px] text-emerald-400 font-semibold">
                  Delivering to {location.area} ({location.pincode})
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 divide-y divide-slate-100">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-20 h-20 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto text-3xl">
                  🛒
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-base">Your Cart is Empty</h4>
                  <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                    Add SSDs, CCTV cameras, or refurbished laptops to get 2-Hour Express Delivery.
                  </p>
                </div>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.product.id} className="py-3 flex gap-3 items-center">
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-xl border border-slate-200 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-xs text-slate-900 line-clamp-2">
                      {item.product.name}
                    </h5>
                    <div className="text-xs font-black text-slate-950 mt-1">
                      ₹{item.product.price.toLocaleString()}{' '}
                      <span className="text-[10px] text-slate-400 font-normal">
                        x {item.quantity}
                      </span>
                    </div>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="flex items-center bg-slate-100 border border-slate-200 rounded-xl overflow-hidden text-xs font-bold">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="px-2 py-1 hover:bg-slate-200 text-slate-700"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-slate-900 font-black">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="px-2 py-1 hover:bg-slate-200 text-slate-700"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-slate-400 hover:text-rose-600 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cartItems.length > 0 && (
            <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-3">
              {/* Coupon Box */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <Ticket className="w-4 h-4 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Coupon (e.g. MIDC500)"
                    className="w-full pl-8 pr-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs uppercase font-bold outline-none focus:border-amber-400"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-3 py-1.5 rounded-lg transition"
                >
                  Apply
                </button>
              </form>

              {couponSuccess && (
                <div className="text-[11px] font-bold text-emerald-700 bg-emerald-100 p-1.5 rounded-md flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Coupon Applied! Saved ₹{appliedDiscount}
                </div>
              )}

              {/* Price Breakdown */}
              <div className="text-xs space-y-1.5 text-slate-600 pt-2 border-t border-slate-200">
                <div className="flex justify-between">
                  <span>Items Subtotal</span>
                  <span className="font-bold text-slate-800">₹{itemSubtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Est. GST Tax (18%)</span>
                  <span className="font-bold text-slate-800">₹{totalGst.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Express Local Delivery</span>
                  <span className={deliveryFee === 0 ? 'text-emerald-600 font-extrabold' : 'font-bold'}>
                    {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                  </span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-bold">
                    <span>Discount</span>
                    <span>-₹{appliedDiscount}</span>
                  </div>
                )}
                <hr className="border-slate-200" />
                <div className="flex justify-between text-sm font-black text-slate-950 pt-1">
                  <span>Grand Total</span>
                  <span className="text-emerald-700 text-base">₹{finalTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* One-Click Checkout CTA */}
              <button
                onClick={onCheckout}
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-black text-sm py-3 rounded-xl shadow-xl transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Proceed to One-Click Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[10px] text-slate-500 text-center font-medium flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 100% Safe Payments • Razorpay & UPI Verified
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
